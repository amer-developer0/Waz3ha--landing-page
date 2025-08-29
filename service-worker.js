const CACHE_NAME = 'waz3ha-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/waz3ha.css',
  '/waz3ha.js',
  '/lang/en.json',
  '/lang/ar.json',
  '/assets/waz3ha_logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
