// sw.js - La Papa Caliente ERP/POS
// Cache básico para poder instalar la app y abrirla aunque la señal falle un instante.
// El estado real (menú, órdenes, inventario) siempre viene de Firebase en tiempo real,
// este cache solo cubre el "cascarón" de la app (HTML/CSS/JS/íconos).

const CACHE_NAME = 'papa-caliente-shell-v1';
const SHELL_FILES = [
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES).catch(() => {}))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Estrategia: network-first para el HTML principal (así siempre ves la última versión),
// cache-first para el resto (íconos, manifest) para que cargue rápido / offline.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const isHTML = req.headers.get('accept')?.includes('text/html');

  if (isHTML) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => caches.match(req).then((cached) => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req).then((res) => {
      const resClone = res.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
      return res;
    }).catch(() => cached))
  );
});

// Notificaciones locales disparadas desde la app (nueva orden, stock bajo, etc.)
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const targetPanel = event.notification.data?.panel || 'orders';
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          client.postMessage({ type: 'NAVIGATE_PANEL', panel: targetPanel });
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(`./index.html?panel=${targetPanel}`);
      }
    })
  );
});

// Permite que la página pida al SW que dispare una notificación del sistema
// (necesario en Android/desktop para que se vea incluso con la app en segundo plano).
self.addEventListener('message', (event) => {
  if (event.data?.type === 'SHOW_NOTIFICATION') {
    const { title, body, panel, tag } = event.data.payload || {};
    self.registration.showNotification(title || 'La Papa Caliente', {
      body: body || '',
      icon: './icons/icon-192x192.png',
      badge: './icons/icon-96x96.png',
      tag: tag || 'papa-general',
      data: { panel: panel || 'orders' },
      vibrate: [120, 60, 120]
    });
  }
});
