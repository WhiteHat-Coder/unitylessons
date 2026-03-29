/**
 * Main JavaScript - Programming Lectures
 * Production Ready - Vanilla JavaScript
 * @version 1.0.0
 */

(function () {
    'use strict';

    // DOM Ready
    const init = () => {
        initScrollTop();
        initAnimations();
        initThemeToggle();
        trackProgress();
        console.log('📚 Programming Lectures - Ready!');
    };

    // Scroll to Top Button
    const initScrollTop = () => {
        const scrollTopBtn = document.createElement('button');
        scrollTopBtn.className = 'scroll-top';
        scrollTopBtn.innerHTML = '↑';
        scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
        document.body.appendChild(scrollTopBtn);

        // Show/hide on scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        // Smooth scroll to top
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };

    // Intersection Observer for Animations
    const initAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements
        const animateElements = document.querySelectorAll('.lecture-card, .topic');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    };

    // Theme Toggle (Light/Dark mode)
    const initThemeToggle = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Create toggle button
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = savedTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 1.5em;
            cursor: pointer;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 1000;
            transition: transform 0.3s ease;
        `;

        themeToggle.addEventListener('mouseenter', () => {
            themeToggle.style.transform = 'scale(1.1) rotate(15deg)';
        });

        themeToggle.addEventListener('mouseleave', () => {
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        });

        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
        });

        document.body.appendChild(themeToggle);
    };

    // Track Learning Progress
    const trackProgress = () => {
        const currentPage = window.location.pathname;
        const progress = JSON.parse(localStorage.getItem('learningProgress') || '{}');

        if (currentPage.includes('day')) {
            const dayNumber = currentPage.match(/day(\d+)/)?.[1];
            if (dayNumber) {
                progress[`day${dayNumber}`] = {
                    visited: true,
                    timestamp: new Date().toISOString()
                };
                localStorage.setItem('learningProgress', JSON.stringify(progress));
                console.log(`Progress saved for Day ${dayNumber}`);
            }
        }
    };

    // Copy Code to Clipboard
    const initCodeCopy = () => {
        document.querySelectorAll('.example').forEach(example => {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-code-btn';
            copyBtn.innerHTML = '📋 Copy';
            copyBtn.style.cssText = `
                position: absolute;
                top: 10px;
                right: 10px;
                background: rgba(255,255,255,0.1);
                color: white;
                border: 1px solid rgba(255,255,255,0.3);
                padding: 5px 10px;
                border-radius: 5px;
                cursor: pointer;
                font-size: 0.9em;
                transition: all 0.3s ease;
            `;

            copyBtn.addEventListener('mouseenter', () => {
                copyBtn.style.background = 'rgba(255,255,255,0.2)';
            });

            copyBtn.addEventListener('mouseleave', () => {
                copyBtn.style.background = 'rgba(255,255,255,0.1)';
            });

            copyBtn.addEventListener('click', () => {
                const code = example.querySelector('code').innerText;
                navigator.clipboard.writeText(code).then(() => {
                    copyBtn.innerHTML = '✅ Copied!';
                    setTimeout(() => {
                        copyBtn.innerHTML = '📋 Copy';
                    }, 2000);
                });
            });

            example.style.position = 'relative';
            example.appendChild(copyBtn);
        });
    };

    // Keyboard Navigation
    const initKeyboardNav = () => {
        document.addEventListener('keydown', (e) => {
            // Alt + Home = Go to home
            if (e.altKey && e.key === 'Home') {
                window.location.href = '/index.html';
            }
            // Alt + → = Next lesson (if exists)
            if (e.altKey && e.key === 'ArrowRight') {
                const currentDay = window.location.pathname.match(/day(\d+)/)?.[1];
                if (currentDay) {
                    const nextDay = parseInt(currentDay) + 1;
                    window.location.href = `/pages/day${nextDay}.html`;
                }
            }
        });
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Initialize code copy after a short delay
    setTimeout(() => {
        initCodeCopy();
        initKeyboardNav();
    }, 500);

    // Export functions for external use
    window.ProgrammingLectures = {
        trackProgress,
        version: '1.0.0'
    };

})();
