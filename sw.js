const CACHE_NAME = "imnovita-pwa-v1";

// Instalación: Obliga a la app a tomar el control de inmediato
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// Estrategia de "Red Primero": Siempre busca los cambios más recientes en vivo
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Si el agente se queda sin internet, carga la versión guardada en caché
      return caches.match(event.request);
    })
  );
});
