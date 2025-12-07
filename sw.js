// Service Worker מינימלי להתקנת PWA
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // כאן אפשר להוסיף בעתיד יכולות עבודה ללא אינטרנט
  // כרגע נשאיר ריק כדי לא להפריע לטעינת האתר
});