const CACHE_NAME = "my-react-pwa-cache";
const urlsToCache = [
  "./offline.html",
  "./index.css",
  "./offline.css",
  './icons/offline.png',
  './512x512.png'
  // add other static assets to cache
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      console.log('Service Worker: Fetching resource ' + event.request.url);
      if (navigator.onLine) {
        // Return the network response when online
        return fetch(event.request);
      } else {
        // Return the cached offline.html when offline
        return cachedResponse || caches.match('/offline.html');
      }
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});