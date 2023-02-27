// Set up a cache with the resources we want to cache
const cacheName = 'v1';
const resourcesToPrecache = [
  '/offline.html',
  '/ICON.png',
  
];

// Listen for the install event, which occurs when the service worker is first installed
self.addEventListener("install", (event) => {
  console.log("Service Worker : Installed!")

  event.waitUntil(
      
    caches.open(cacheName).then((cache)=>{
      console.log("Service Worker: Caching important offline files");
      return cache.addAll(resourcesToPrecache);
    })
  )
} )
// Listen for the fetch event, which is triggered for every network request the app makes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request.url).then((response)=>{
      console.log("Service Worker: Fetching resource "+event.request.url);
      return response||fetch(event.request).then((response)=>{
        console.log("Service Worker: Resource "+event.request.url+" not available in cache");
        return caches.open(cacheName).then((cache)=>{
          console.log("Service Worker: Caching (new) resource "+event.request.url);
          cache.put(fetching.request,response.clone());
          return response;
        });
      }).catch(function(){      
        console.log("Service Worker: Fetching online failed, HAALLPPPP!!!");
        //Do something else with the request (for example: respond with a different cached file)
      })
    })
  );
});