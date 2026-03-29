/**
 * Service Worker - Offline Support
 * Enables Progressive Web App functionality
 */

const CACHE_NAME = 'programming-lectures-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/modules/unity-concepts/lesson1.html',
    '/modules/unity-concepts/lesson2.html',
    '/modules/csharp-programming/lesson1.html',
    '/assets/css/main.css',
    '/assets/css/lessons.css',
    '/assets/js/main.js'
];

// Install Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// Fetch from cache
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Update Service Worker
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
