const cacheName = "v1";
const cacheAssets = [
  "index.html",
  "./src/index.css",
  "./src/index.js",
  "./src/modal.js",
  "./src/images/dato.svg"
];

//Install Event
self.addEventListener("install", e => {
  console.log("ServiceWorker  Installed");
  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log("Service Workers: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});
//Activar
self.addEventListener("activate", e => {
  console.log("ServiceWorker  Activated");
  //Remove unwanted Caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log("Clearing All cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
//Fetch event
self.addEventListener("fetch", e => {
  console.log("Service Worker fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
