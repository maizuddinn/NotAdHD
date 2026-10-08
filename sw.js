/* ≠AdHD offline service worker. Bump VERSION on each release so old caches are cleared. */
const VERSION = 'adhd-2.3.0';
const SCOPE = self.registration.scope;
const INDEX = new URL('index.html', SCOPE).href;
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/icon.svg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {            // online: always the newest page; offline: the cached copy
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(INDEX, cp)); return res; })
      .catch(() => caches.match(INDEX).then(x => x || caches.match(SCOPE))));
    return;
  }
  e.respondWith(caches.match(r).then(x => x || fetch(r).then(res => { const cp = res.clone(); caches.open(VERSION).then(c => c.put(r, cp)); return res; })));
});
