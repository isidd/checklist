Link : https://www.youtube.com/watch?v=sFsRylCQblw&ab_channel=Fireship

Overview:

Progressive web apps is a way to build websites that has a same experience as native mobile apps
we would be able to install a website on our device
it will serve from a single code base
like:
-offline mode -push notification -camera -geo location -motion -bluetooth .. (window.addEventListener('deviceMotion',(event)))
Chrome lighthouse tool -> it will analyze performance accessibility and it will tell weather our app is installable or not
generally it is useful to run an audit on site

Service worker will do the caching pages and for this we have libraries -> workbox
with create react app it generally create service worker

FOR PWA we only need 4 files-
-index.html -logo -manifest.json -service-worker.js
if('serviceWorker' in navigator){
navigator.serviceWorker.register('./service-worker.js')
}
-service-worker.js
importScripts('workbox');

workbox.routing.registerRoute({request}=>{
request.destination === 'image';
new workbox.strategies.CacheFirst() -> PWA will try to read from the cache instead of going over the network (file don't change much like->images)
new workbox.strategies.NetworkFirst() -> It will use a network if the network is connected or if it is offline it will fallback to the cache
})
