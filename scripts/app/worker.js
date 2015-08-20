(function () {
    "use strict";
    /* global importScripts */
    /* global self */
    /* global caches */
    /* global fetch */
    /* global URL */


    // Include SW cache polyfill
    importScripts("/Scripts/sw/serviceworker-cache-polyfill.js");


    // Cache name definitions
    var cacheNameStatic = "barnsleycouncil-static-v1";
    var cacheNameGoogle = "barnsleycouncil-googlecdn-v1";

    var currentCacheNames = [
      cacheNameStatic,
      cacheNameGoogle
    ];


    // A new ServiceWorker has been registered
    self.addEventListener("install", function (event) {
        event.waitUntil(
          caches.open(cacheNameStatic)
            .then(function (cache) {
                return cache.addAll([
                  "/Scripts/main.min.js",
                  "/Scripts/vendor/jquery-1.11.2.min.js?version=1.4",
                  "/Scripts/vendor/modernizr-2.8.3-respond-1.4.2.min.js",
                  "/css/barnsley-council.min.css?version=1.1"
                ]);
            })
        );
    });


    // A new ServiceWorker is now active
    self.addEventListener("activate", function (event) {
        event.waitUntil(
          caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                  cacheNames.map(function (cacheName) {
                      if (currentCacheNames.indexOf(cacheName) === -1) {
                          return caches.delete(cacheName);
                      }
                  })
                );
            })
        );
    });


    // The page has made a request
    self.addEventListener("fetch", function (event) {
        var requestURL = new URL(event.request.url);

        event.respondWith(
          caches.match(event.request)
            .then(function (response) {

                if (response) {
                    return response;
                }

                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                  function (response) {

                      var shouldCache = false;

                      if (response.type === "basic" && response.status === 200) {
                          shouldCache = cacheNameStatic;
                      } else if (response.type === "opaque") { // if response isn"t from our origin / doesn"t support CORS
                          if (requestURL.hostname.indexOf(".googleapis.com") > -1) {
                              shouldCache = cacheNameGoogle;
                          } else {
                              // just let response pass through, don"t cache
                          }
                      }

                      if (shouldCache) {
                          var responseToCache = response.clone();

                          caches.open(shouldCache)
                            .then(function (cache) {
                                console.log("cached: " + event.request.url + " in " + shouldCache);
                                var cacheRequest = event.request.clone();
                                cache.put(cacheRequest, responseToCache);
                            });
                      }

                      return response;
                  }
                );
            })
        );
    });

})();