// Set up a cache with the resources we want to cache
const cacheName = 'v1';
const resourcesToPrecache = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/ICON.png'
];

// Listen for the install event, which occurs when the service worker is first installed
self.addEventListener("install", (event) => {
  console.log("Service Worker : Installed!")

  event.waitUntil(
      
      (async() => {
          try {
              cache_obj = await caches.open(cache)
              cache_obj.addAll(caching_files)
          }
          catch{
              console.log("error occured while caching...")
          }
      })()
  )
} )
// Listen for the fetch event, which is triggered for every network request the app makes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            return caches.open(cacheName)
              .then((cache) => {
                cache.put(event.request, response.clone());
                return response;
              });
          });
      })
  );
});