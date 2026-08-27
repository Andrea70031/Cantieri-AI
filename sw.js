const CACHE='cantiereai-final-v1-3';
const CORE=['./','./index.html','./manifest.json','./app-icon-192.png','./app-icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==CACHE)await caches.delete(k);await self.clients.claim()})())});
self.addEventListener('fetch',e=>{
 const r=e.request;
 if(r.method!=='GET') return;
 if(r.mode==='navigate'){
   e.respondWith(fetch(r).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));return resp}).catch(()=>caches.match('./index.html')));
   return;
 }
 e.respondWith(caches.match(r).then(cached=>cached||fetch(r).then(resp=>{if(resp.ok&&r.url.startsWith(self.location.origin)){const cp=resp.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return resp})));
});