/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ce2ec33628b96625dd63a5e9101557b5"
  },
  {
    "url": "assets/css/0.styles.d8b4b55e.css",
    "revision": "9510456bdfeb5e7941a7f703f9e7276a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/state-of-the-art_lean.657210af.jpg",
    "revision": "657210af85567b4f8785a33808c1922e"
  },
  {
    "url": "assets/js/1.15e1f247.js",
    "revision": "82ac3220874881990c453137a3dd20ed"
  },
  {
    "url": "assets/js/10.b35ea5ee.js",
    "revision": "7a97defa508713404114fa3887f984db"
  },
  {
    "url": "assets/js/13.81207a53.js",
    "revision": "fa2677fcff7f652f13ef8c1017a06935"
  },
  {
    "url": "assets/js/14.28adbdc8.js",
    "revision": "a98d2b284eff179de526e302d55d9626"
  },
  {
    "url": "assets/js/15.b1811a47.js",
    "revision": "1d5173ab067ce82e5e3eda4cc5f395e0"
  },
  {
    "url": "assets/js/16.e20171ef.js",
    "revision": "ac44af8192ca4bb55cea109d1fb2352d"
  },
  {
    "url": "assets/js/17.249a9b53.js",
    "revision": "85a563b03698eef464a8f847dc37a5da"
  },
  {
    "url": "assets/js/18.e8663892.js",
    "revision": "7f5fc8770ca7fe6815dc36ce5a803173"
  },
  {
    "url": "assets/js/19.03cb9d27.js",
    "revision": "ecb27985b57ee9890def515c90ea94fb"
  },
  {
    "url": "assets/js/2.2b818107.js",
    "revision": "1f1fcba1edc4ef88d0299b23da7d9e11"
  },
  {
    "url": "assets/js/20.ded4c831.js",
    "revision": "eba11de33d0e843accba227315c060df"
  },
  {
    "url": "assets/js/21.603e9c58.js",
    "revision": "442c079e67c48b80160618aef22bbfd7"
  },
  {
    "url": "assets/js/22.cc84c1bd.js",
    "revision": "eeec3e8d6f95eead8243af8a24ad3fcd"
  },
  {
    "url": "assets/js/23.9cd6f441.js",
    "revision": "734c2239a4710527baa59123b6270382"
  },
  {
    "url": "assets/js/24.16ec05b2.js",
    "revision": "575924ef393a777c0ff6510a3e62e8e7"
  },
  {
    "url": "assets/js/25.2a27bbae.js",
    "revision": "3dc16fad11c19f6353275374a9c47a12"
  },
  {
    "url": "assets/js/26.08980e7c.js",
    "revision": "5116445342d1b6af07ebb91cb12ca52f"
  },
  {
    "url": "assets/js/27.2518db81.js",
    "revision": "d77637ca1f23dbbab9fd4ebeb4c7049b"
  },
  {
    "url": "assets/js/28.962fc9cf.js",
    "revision": "124d197f480ae6581124c0656f776846"
  },
  {
    "url": "assets/js/29.40b9adfa.js",
    "revision": "f734942e38bd262e8cb8b9d8d19fa2f9"
  },
  {
    "url": "assets/js/3.9069900d.js",
    "revision": "ffe4b425c36a718b078e74a7f0b2dfb2"
  },
  {
    "url": "assets/js/30.555de80c.js",
    "revision": "c5cdb6976ec318df380a800e0935b8b9"
  },
  {
    "url": "assets/js/31.34ef50bd.js",
    "revision": "500fbaa5f230936b47f347d2b3036135"
  },
  {
    "url": "assets/js/32.8ebe529d.js",
    "revision": "79b58b40a832f2713c4142c579b3209f"
  },
  {
    "url": "assets/js/33.73e1ce44.js",
    "revision": "e5d5b982bfab2af00bfea6a9de817052"
  },
  {
    "url": "assets/js/34.e74b7114.js",
    "revision": "4ff809bf0757c54be52582f483817477"
  },
  {
    "url": "assets/js/35.8a2dba10.js",
    "revision": "c4cf0da8f05190c189e27a156e88a59d"
  },
  {
    "url": "assets/js/36.568145e3.js",
    "revision": "8c40e2b3dd3ca52f1021816a5d71cde5"
  },
  {
    "url": "assets/js/37.becd3db4.js",
    "revision": "97b78032c36f77c79582828f7ff4ab0a"
  },
  {
    "url": "assets/js/38.da67933c.js",
    "revision": "037e4f464117714b32a4b15db46eac14"
  },
  {
    "url": "assets/js/39.a83b4c17.js",
    "revision": "a4c4baf19479868a647d0d746bebdf6e"
  },
  {
    "url": "assets/js/4.82c1c3ea.js",
    "revision": "c993d5c3cdc01906b99d4a8e7068b9e6"
  },
  {
    "url": "assets/js/41.38c94244.js",
    "revision": "d885b595d8d875620fcfac660ac52a13"
  },
  {
    "url": "assets/js/5.3439b5a2.js",
    "revision": "409e2e0cae5530f3fff48cbf29be459b"
  },
  {
    "url": "assets/js/6.2ad5e2f5.js",
    "revision": "fd083be2623f069a0a80eca85cf900f1"
  },
  {
    "url": "assets/js/7.c31f2fb1.js",
    "revision": "1bb55e95ceadea445f0d9670b48076ed"
  },
  {
    "url": "assets/js/8.cdda6381.js",
    "revision": "3046e00dd576d167e9c1ea9b01ae7f95"
  },
  {
    "url": "assets/js/9.41166042.js",
    "revision": "f011683dfb1937feb0a515f83cc60501"
  },
  {
    "url": "assets/js/app.dad94ace.js",
    "revision": "cdd91cd2c2cb8ebea1209d1a6197c189"
  },
  {
    "url": "assets/js/vendors~docsearch.21d99c40.js",
    "revision": "e5b75c8e7f940255f8a0db0287c1604c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "8876eb3072d5d96347c0bb00f5b512f5"
  },
  {
    "url": "design/index.html",
    "revision": "de71c77fae0a5a6dc767a3101a46ce66"
  },
  {
    "url": "index.html",
    "revision": "e67c6e8974fbcb66288b78b640f4edf2"
  },
  {
    "url": "intro/index.html",
    "revision": "90b953da004a879a445e8de0fa4153aa"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "project-icon.png",
    "revision": "dac26c413e4355d329703016422a762b"
  },
  {
    "url": "requirements/index.html",
    "revision": "22b133e4037614bcc7fc38e518fa5421"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "cf777594247af48966fc96c1a90ff6c6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "3f1f0c2e9193d1f9635e0224066d746a"
  },
  {
    "url": "software/index.html",
    "revision": "c2d38297535357ff2eb8c27c774bdfd2"
  },
  {
    "url": "state-of-the-art_ci-cd.png",
    "revision": "52455b9695f0776a8c12712b752d5906"
  },
  {
    "url": "state-of-the-art_devops.png",
    "revision": "c205a3392e292a3fff429ddc1b4983c1"
  },
  {
    "url": "state-of-the-art_incremental.jpg",
    "revision": "9159520f2ef8f481d72319126f90a7a7"
  },
  {
    "url": "state-of-the-art_iterative.png",
    "revision": "eac7d30085e580cd7d6262ace3d99a0b"
  },
  {
    "url": "state-of-the-art_lean.jpg",
    "revision": "657210af85567b4f8785a33808c1922e"
  },
  {
    "url": "state-of-the-art_rad.jpg",
    "revision": "a367206bc1bd1abd37b76244228bccbe"
  },
  {
    "url": "state-of-the-art_scrum.jpg",
    "revision": "1b9e495cc6275e9c6f1822a48aef8c0c"
  },
  {
    "url": "state-of-the-art_spiral.png",
    "revision": "2bebde859b228319ac5428d692f8cce0"
  },
  {
    "url": "state-of-the-art_v-model.png",
    "revision": "406516c48714baa08bdd0dceb7c53dd6"
  },
  {
    "url": "test/index.html",
    "revision": "47463ee1382722586bf908e2cf3a41c8"
  },
  {
    "url": "use cases/index.html",
    "revision": "417ed225eee62540c64702cc998fc7dc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
