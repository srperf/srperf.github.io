const version = '20240714194102';
const cacheName = `static::${version}`;

const buildContentBlob = () => {
  return ["/blog/2022/01/10/JoinedGrafanaK6/","/blog/2019/10/08/ScenarioModeling1/","/2019/09/03/UIvsProtocol/","/2019/06/03/Monitoring/","/2019/04/30/WhatThePerf/","/2019/03/27/PerfNotLoad/","/2018/09/20/WhatIsAgile/","/2018/09/04/AgileJourney/","/2018/02/09/Script10All2Gether/","/2017/11/28/Script08Makeup/","/book/","/categories/","/courses/","/blog/","/","/me/","/podcast/","/presenter/","/assets/styles.css","/youtube/","/manifest.json","/assets/search.json","/redirects.json","/sitemap.xml","/robots.txt","/blog/page2/","/blog/page3/","/blog/page4/","/blog/page5/","/blog/page6/","/feed.xml","/assets/styles.css.map","/assets/img/logo.png?s=52", "/assets/default-offline-image.png", "/assets/scripts/fetch.js"
  ]
}

const updateStaticCache = () => {
  return caches.open(cacheName).then(cache => {
    return cache.addAll(buildContentBlob());
  });
};

const clearOldCache = () => {
  return caches.keys().then(keys => {
    // Remove caches whose name is no longer valid.
    return Promise.all(
      keys
        .filter(key => {
          return key !== cacheName;
        })
        .map(key => {
          console.log(`Service Worker: removing cache ${key}`);
          return caches.delete(key);
        })
    );
  });
};

self.addEventListener("install", event => {
  event.waitUntil(
    updateStaticCache().then(() => {
      console.log(`Service Worker: cache updated to version: ${cacheName}`);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(clearOldCache());
});

self.addEventListener("fetch", event => {
  let request = event.request;
  let url = new URL(request.url);

  // Only deal with requests from the same domain.
  if (url.origin !== location.origin) {
    return;
  }

  // Always fetch non-GET requests from the network.
  if (request.method !== "GET") {
    event.respondWith(fetch(request));
    return;
  }

  // Default url returned if page isn't cached
  let offlineAsset = "/offline/";

  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)) {
    // If url requested is an image and isn't cached, return default offline image
    offlineAsset = "/assets/default-offline-image.png";
  }

  // For all urls request image from network, then fallback to cache, then fallback to offline page
  event.respondWith(
    fetch(request).catch(async () => {
      return (await caches.match(request)) || caches.match(offlineAsset);
    })
  );
  return;
});
