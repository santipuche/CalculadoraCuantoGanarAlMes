const cacheName = 'v1';
const cacheAssets = ['index.html', 'manifest.json'];

// Instalación del Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheAssets);
    })
  );
});

// Estrategia de carga: Intenta internet, si no, usa el caché
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
