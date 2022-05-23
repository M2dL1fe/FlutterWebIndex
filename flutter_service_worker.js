'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9094aacdae789dccd67fa32109ff1a18",
"index.html": "574e96d3d551713f6bde9d78e647c0b6",
"/": "574e96d3d551713f6bde9d78e647c0b6",
"main.dart.js": "b6bcc43f8db24c9e16c19fe7f86f8963",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"README.md": "7b74f310f1b0c596565157b2fd09d138",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8c52d02840bc5c10bc050ea95d7b8313",
".git/ORIG_HEAD": "7bbc581941b7bbd0244541bdaeb3abd1",
".git/config": "5a40c05a9c3289b446e0b82c6b37aa37",
".git/objects/61/07612b70ec7650ca6538c3688e061765ff9cdc": "12a78500f879e53b874caecc401a8a41",
".git/objects/0d/6efc4bd2806052befd6602d17d94e30c2d6e8b": "644e6be9a1b639f0df12719cb764e74f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/50cd6d24dd593751b382b97a56c6e7f9276ecd": "706c2c03ae73c510cc5ec0e11cf1b336",
".git/objects/66/7ba94ac3f22ca9409ab891405e48d1c50feda2": "5de382356c3dc6e9abed347529ddfb5f",
".git/objects/3e/74b961b108d9f4320f878b29126bc0fcf66025": "db31aa6296ce8ab815f78f5de9a32464",
".git/objects/3c/7a9224da4ba100846896ae2b904e30ffffab26": "674f8c1e301cbf2949ad244c5bc57062",
".git/objects/56/f00b422ce981935b288e419b72bc7035f5ad24": "b9bad2d09ce54175ae9299d1f9c0f2d6",
".git/objects/58/1c481f49468906415428067d7fcc095c6ca541": "43924c631aa981b398c2ca688cacf16c",
".git/objects/60/3670ccdcf98ebf9a6b12393c8809a620e6551c": "2c9d567fa62684514cfc1d4775a1cb91",
".git/objects/34/5853f75e86eb8f35b166a42a6615d2ae10c8e3": "3a7302605133dc2451475a12d884cf47",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/b2/7b8b4e32c68cd869b4b4467d995de3f540204a": "9a8b1ab7eebd6643b01c977951e7e57d",
".git/objects/ac/a6ea82aa81269327232007359c6f4c5cd47b68": "614db60af1d5f0ad38ceebb4ab42022f",
".git/objects/da/2cfddfa8db867e6eb93303f807edde324f1197": "b7da97982bf495ade28d89aa162f4f63",
".git/objects/b4/5a713cf55cd104269d546ffb0e3494aab7e71b": "472d8d866837dbb9014fc234523d5945",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/155d3fbae7520dea08e24cec802380d70bf5ea": "fae5501d63f168eface0d531e3c25193",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/db3d0b0f274df5119a021d8925367fe2b83146": "7e315a6e66abe4d32949b64de3db70c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b3ee2a4fa41293674cddba27c220b386566e50": "0b4227e098774a7a4df11ab4eadaf863",
".git/objects/fc/11aac6b4add3d95e6436736de780b23a7dfbaa": "8b086cf68586a7e9f8df76f334afb725",
".git/objects/fd/5006c14e835326b8b36918f6320729f0916bc1": "c284f2f23eeeac4b9581df8ea0f605eb",
".git/objects/fd/8fe71af2e0b7496a9f7c7fe3a9978023f2547e": "803f750de2e347c48d7823e612ff8077",
".git/objects/ca/14e3bc27fa96bbb56fe4a51b2160ff4333513e": "91b129649e102849367f181771271a9c",
".git/objects/ed/a828ae0c0c9448a1ab286642072a96e01a9283": "766f7679881d80324b4a18cc7fdabd51",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/9c97c61750ca0871e4c6861e02f7609a7efe65": "e5681faca4fd1f3b77e85f0cbf372f83",
".git/objects/16/7604cae05c654a658ec0add20fa74bad765b51": "431d94b191b0ad6877a2023f3ceaf862",
".git/objects/89/9d28ff9a2778d50783f846ef2563cab2cd9ec6": "3265bef7c0982c2c624e182a004a6084",
".git/objects/89/3a50d57ea0c1a3258060bb91920e8544c24712": "4c05e2e9f98b000198770291afe8ba51",
".git/objects/1a/070e290dabb8508f7e620bdcb592548be9f40e": "d0eb053908e50440efe108b49d63f7b1",
".git/objects/1a/e5477281888e386c0a46869d6ed10aa15e0b1c": "d405927d8897a477e48be77d36fd4b15",
".git/objects/17/725b904745e90342848f1a4aaf22b4f4b1ea53": "c57e2c9223b20f22ec7182bba253a98c",
".git/objects/8f/e3454ec7f7b1a3f0d494d5ace63281d053eae7": "50f236f4182283af99fcb15b012110fe",
".git/objects/8f/0a6ded1fba3e4cb6e0097f507410b1bce18dd5": "0ce22a234138b348d566f788ebea299c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/73d287484a82481e9983205ed13ffda4821b4f": "063a2101a197d7812cedbe551c04471c",
".git/objects/72/cedfba4bb48efc63f98f192d917001c8993ecb": "1e23ba2e5b5abf73528fd53f1faaebbf",
".git/objects/2f/cd7e98f583d8f9cca839542f8515322d849a9a": "eed2689b21f2c408de8d317a2f5f4989",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/06797b4b25197e82bfe9ff0bb0bc3237b79e1d": "4ed06011ed2a962e7cf1722d0f02387c",
".git/objects/6b/1bb056e8fb1e20a195ce55d7d78a7f246c39ce": "d4eadfb345096e298119f9b5fcab9e73",
".git/objects/5d/8f0f5372fe403d4036ab5d32b326c3656a12be": "086989337d1b3e1de33020a1b5d9df47",
".git/objects/31/d095934c852bc775c09859df349817d4731569": "468c9615fe9eeb1eff006f0e770680eb",
".git/objects/96/37b60537255fd5bf4166c32dd32a75c8876eec": "09d485cb1e3a598d63be0e1e53d2f4a4",
".git/objects/98/683822fabc1e634a096f3597d38a5bc806b6f0": "ccf6113db4af53f1812508608271cf28",
".git/objects/53/5798bc5c6926902c90c2ae361ecf6753291828": "e12f7b2812c4976cc2c30339da13f0da",
".git/objects/97/be361fa99ccfbcb97d16332d266d2bd09bf34c": "cfabbacca2ed77d11ef068be1eaeb683",
".git/objects/0a/4f5cb3e5ca55a3b80b6a433438de8c4e5c5c43": "fc052978090d1ba4474816e013380ba6",
".git/objects/bf/8df3c9b1c4af1d8178805b6f1185702d169a94": "a5b65dee49ac6eb82f21e3f8c03c8a07",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/b6/902f05777c764df9462708e2e7de534174cacf": "b7b20af083ad5a0167a2e08a0e1e6dd1",
".git/objects/b6/b220202b3c41d49ee6bba785602b991fe8c6a5": "c0f1cd38dfa4c4760651cdec27a92707",
".git/objects/d5/5fedd4f261fdf25a21785a8fb9ffd157631a33": "c81e00a82b814b686b9208fcf9655f22",
".git/objects/af/20d1cd76f4ecf6d9ee7f8b822d60c6a3c2bcec": "a2608a90de4b676cbdf5fda05004c0d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c2/acd4ceda312f1272145aad9ee4f05ec98de335": "d6f491add1efacbf4a4024d4bc635c4f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f8/bc929cfd55470acde3d1904e2434ba857f07a0": "d9c333ee3fae62d3321250d6807d0275",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/48/0ba3494596604b5ca9ddf52676897f127ac2f1": "874c2aa412e43a1d6b50ec4219bc0ddc",
".git/objects/4a/526f43f0fe903e9cd42908dfd568835a833353": "10abdea3c13f4132d26c45551a6d9163",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/9c6c3d58a2e9a219942f320a7374f953eeb152": "04e504cd8bb2a125fc95f1f8d4daab24",
".git/objects/15/65626d597a1a6665b22923880337d692d42cd8": "bd308fb197a7e2d8a4f00c7141def710",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/49/97870bdc41d661b0e7d5b79e582c1262196ea5": "1ce9a9d4d3b7ac6e9ab6c5a43194fbee",
".git/objects/78/00e9a08a09d4035f0c668f06511c438245f8c2": "d47f2ec88487d64e7f95b43cad967728",
".git/objects/13/036393289c7e680d34215daa18675f7fbc87aa": "5738e43e48c3562bbd578cfc75100cde",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "15c4fbd493d04290e9fb09fffdbee1e1",
".git/logs/refs/heads/main": "aa5f0790c7152324b9df2fa2c32531a0",
".git/logs/refs/remotes/origin/main": "284746e6c3b0fc77fc598d344ad3827b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "a06b11ad3ea78c20ddcca7a287078ee7",
".git/refs/remotes/origin/main": "a06b11ad3ea78c20ddcca7a287078ee7",
".git/index": "5755ea41386309a5672a5be927f8abda",
".git/COMMIT_EDITMSG": "991f1e1f9051aabd1052f14e0b55f88c",
".git/FETCH_HEAD": "2a9e844d015a684c2134c3221c9d99d5",
"assets/images/ic_login_logo.png": "7a544a55d73d328ed5a93e9bd46ce756",
"assets/images/icon_fresh_add.png": "033ab4de93a8f3d49ccd3f65dd36a0f2",
"assets/images/ic_picture_loadfailed.png": "e7b84dbbeb2dd8b2d8e30e26a9adeeee",
"assets/images/ic_login_banner.jpg": "7f42294a9771fbe9544dd1f76d2784f1",
"assets/AssetManifest.json": "24f95d6d58403040f3dbfda20e9ad3de",
"assets/NOTICES": "665d66b21ef865be5888d2d165b685ba",
"assets/json/landing_page.json": "f644000f791b1e60be3707659c76f711",
"assets/json/landing_page_product_1.json": "efb57c5ec521a18a034cc20d13ac40e7",
"assets/FontManifest.json": "0e6745c44c7f5764b80b273e89f45c1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/font_cn.ttf": "1d5f00f1c621c70c176eaa212fddb937",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
