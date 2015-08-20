/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

require('serviceworker-cache-polyfill');

var version = 'v1';
var staticCacheName = 'bmbc-cache-v1';

self.oninstall = function (event) {
    self.skipWaiting();

    event.waitUntil(
      caches.open(staticCacheName).then(function (cache) {
          return cache.addAll([            
            'css/barnsley-council.min.css',
            'scripts/main.min.js',
            'scripts/vendor/jquery-1.11.2.min.js',
            'scripts/vendor/modernizr-2.8.3-respond-1.4.2.min.js'
          ]);
      })
    );
};

var expectedCaches = [
  staticCacheName
];

self.onactivate = function (event) {
    if (self.clients && clients.claim) {
        clients.claim();
    }

    event.waitUntil(
      caches.keys().then(function (cacheNames) {
          return Promise.all(
            cacheNames.map(function (cacheName) {
                if (expectedCaches.indexOf(cacheName) == -1) {
                    return caches.delete(cacheName);
                }
            })
          );
      })
    );
};

self.onfetch = function (event) {
    var requestURL = new URL(event.request.url);

    event.respondWith(
        caches.match(event.request, {
            ignoreVary: true
        })
    );
};