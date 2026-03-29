# Contributing to Programming Lectures

First off, thank you for considering contributing to Programming Lectures! ❤️

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Adding New Lessons](#adding-new-lessons)

## 🤝 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

- Be respectful and inclusive
- Welcome newcomers and beginners
- Accept constructive criticism gracefully
- Focus on what is best for the community

## 🎯 How Can I Contribute?

### Reporting Bugs
Before creating bug reports, please check existing issues. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if relevant**
- **Include browser and OS details**

### Suggesting Enhancements
Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternative solutions you've considered**

### Adding Content
We're always looking for:
- New lesson topics
- Better code examples
- Exercise improvements
- Clearer explanations
- Translations
- Accessibility improvements

## 💻 Development Setup

1. **Fork the repository**
   ```bash
   # Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/programming-lectures.git
   cd programming-lectures
   ```

3. **Start development server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using npm (if you have it installed)
   npm install
   npm start
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🔄 Pull Request Process

1. **Update your fork**
   ```bash
   git remote add upstream https://github.com/original/programming-lectures.git
   git fetch upstream
   git merge upstream/main
   ```

2. **Make your changes**
   - Follow the style guidelines below
   - Test thoroughly
   - Update documentation if needed

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your change"
   ```
   
   Commit message prefixes:
   - `Add:` for new features
   - `Fix:` for bug fixes
   - `Update:` for updates to existing features
   - `Docs:` for documentation changes
   - `Style:` for formatting changes
   - `Refactor:` for code refactoring

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Link any related issues

## 📝 Style Guidelines

### HTML
```html
<!-- Use semantic HTML5 elements -->
<article>
  <header>
    <h1>Lesson Title</h1>
  </header>
  <section>
    <h2>Topic</h2>
    <p>Content...</p>
  </section>
</article>

<!-- Indent with 4 spaces -->
<!-- Use lowercase for tags and attributes -->
<!-- Include alt text for images -->
<!-- Use meaningful IDs and classes -->
```

### CSS
```css
/* Use meaningful class names */
.lesson-container {
    /* Group related properties */
    /* Display & Box Model */
    display: flex;
    padding: 20px;
    
    /* Typography */
    font-size: 1em;
    line-height: 1.6;
    
    /* Visual */
    background: white;
    border-radius: 5px;
    
    /* Animation */
    transition: all 0.3s ease;
}

/* Use CSS custom properties for theme values */
:root {
    --primary-color: #667eea;
    --spacing-md: 20px;
}

/* Mobile-first approach */
@media (min-width: 768px) {
    .lesson-container {
        padding: 40px;
    }
}
```

### JavaScript
```javascript
/**
 * Use JSDoc comments for functions
 * @param {string} userId - The user's ID
 * @returns {Object} User data
 */
const getUser = (userId) => {
    // Use const/let, never var
    // Use arrow functions
    // Use meaningful variable names
    // Add comments for complex logic
    return userData;
};

// Use strict equality
if (value === 'test') {
    // ...
}

// Use template literals
const message = `Welcome, ${userName}!`;
```

### Code Examples in Lessons
```html
<div class="example">
    <div class="example-header">Example: Descriptive Title</div>
    <code>
// Use clear, beginner-friendly code<br>
// Add comments explaining each step<br>
variable = value<br>
print(variable)<br>
    </code>
    <div class="output">
        <div class="output-label">Output:</div>
        Expected output here
    </div>
</div>
```

## 📚 Adding New Lessons

### Lesson Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day X: Lesson Title | Programming Lectures</title>
    <link rel="stylesheet" href="../assets/css/main.css">
    <link rel="stylesheet" href="../assets/css/lessons.css">
</head>
<body>
    <div class="container">
        <header>
            <a href="../index.html" class="back-btn">← Back to Home</a>
            <h1>📖 Day X: Lesson Title</h1>
            <p>Brief description</p>
        </header>

        <div class="content">
            <!-- Topic 1 -->
            <div class="topic">
                <h2>1. Topic Title</h2>
                
                <div class="concept">
                    <h3>Concept:</h3>
                    <p>Clear explanation...</p>
                </div>

                <!-- Code examples -->
                <!-- Practice exercises -->
            </div>

            <!-- More topics... -->

            <!-- Summary -->
            <div class="key-points">
                <h4>📚 Summary</h4>
                <p>What students learned...</p>
            </div>
        </div>

        <footer>
            <p>Encouraging message...</p>
        </footer>
    </div>

    <script src="../assets/js/main.js"></script>
</body>
</html>
```

### Lesson Checklist
- [ ] Clear learning objectives
- [ ] Beginner-friendly explanations
- [ ] Multiple code examples
- [ ] Real-world analogies
- [ ] Practice exercises
- [ ] Summary section
- [ ] Mobile responsive
- [ ] Tested on multiple browsers
- [ ] Proper meta tags
- [ ] Linked correctly from homepage

## 🧪 Testing

Before submitting, test:
- [ ] All browsers (Chrome, Firefox, Safari, Edge)
- [ ] Mobile devices (iOS, Android)
- [ ] Tablet devices
- [ ] Lighthouse score (aim for 95+)
- [ ] Accessibility with screen reader
- [ ] Keyboard navigation
- [ ] All links work
- [ ] Code examples are correct
- [ ] No console errors

## 📖 Documentation

Update documentation when:
- Adding new features
- Changing existing functionality
- Adding new deployment methods
- Updating dependencies

## ✅ Review Process

Your PR will be reviewed for:
1. Code quality and style compliance
2. Educational value
3. Beginner-friendliness
4. Browser compatibility
5. Mobile responsiveness
6. Accessibility
7. Performance impact

## 🎓 Content Guidelines

### Writing Style
- Use simple, clear language
- Explain technical terms when first used
- Use real-world analogies
- Break complex topics into smaller parts
- Include visual examples where possible
- Add emojis sparingly for engagement 🎯

### Code Examples
- Start simple, gradually increase complexity
- Include comments explaining each part
- Show expected output
- Use meaningful variable names
- Follow consistent formatting
- Test all code before including it

### Exercises
- Provide clear instructions
- Start with guided exercises
- Progress to independent challenges
- Include hints when appropriate
- Provide solution examples

## 🙋 Questions?

- Create an issue for questions
- Join discussions in existing issues
- Check documentation first
- Be patient and respectful

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Programming Lectures! 🎉
Together, we're making programming education accessible to everyone! 💻✨
