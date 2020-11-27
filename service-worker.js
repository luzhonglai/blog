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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "079a67c28534d177b840874e385ab05c"
  },
  {
    "url": "assets/css/0.styles.3ae4fbcb.css",
    "revision": "0041d0d6e2c1c58aa5a5d1fdfb25b948"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.e64f1596.js",
    "revision": "59a7bdf57cbd2208c4f706d8ced074b2"
  },
  {
    "url": "assets/js/10.3d9a11d4.js",
    "revision": "75c7e954090b99bc88b5aed8c4daae62"
  },
  {
    "url": "assets/js/11.2a731341.js",
    "revision": "9a1b59419bb53e7dd92357302a6c5bfe"
  },
  {
    "url": "assets/js/12.7deea4d0.js",
    "revision": "6f56db2a74e512d8defc5be973100f90"
  },
  {
    "url": "assets/js/13.858b4425.js",
    "revision": "df6dcc0ad647d94c6279df32f1fc00ba"
  },
  {
    "url": "assets/js/14.13c9d55a.js",
    "revision": "d517c7d946bf8469d0352eb404af7e08"
  },
  {
    "url": "assets/js/15.4d1502d4.js",
    "revision": "51ee118115aa6d1378fe67c51bd12c2f"
  },
  {
    "url": "assets/js/16.2e4b5ad4.js",
    "revision": "6913b45a112a4ae8707119eb954b0993"
  },
  {
    "url": "assets/js/17.b9bc5a8e.js",
    "revision": "80f87f462b4053bf7dfb70418355cca6"
  },
  {
    "url": "assets/js/18.20051c17.js",
    "revision": "7ad1919cbdb4319788c95bf63a5776aa"
  },
  {
    "url": "assets/js/19.2c63408b.js",
    "revision": "97a6281da39072459cb88e46abb70509"
  },
  {
    "url": "assets/js/20.d7a210a4.js",
    "revision": "a88f4725a42335bd7c75e9c62d697d25"
  },
  {
    "url": "assets/js/21.59eb2691.js",
    "revision": "acb1b0ccc1dcd06b7aea52ad2e84d86d"
  },
  {
    "url": "assets/js/22.5a1d4a64.js",
    "revision": "f6f2d5764992ea87422f17e7c50002b2"
  },
  {
    "url": "assets/js/23.f0a0527e.js",
    "revision": "041ac2b82a24c1e5cbbef649da0a6f50"
  },
  {
    "url": "assets/js/24.02d32310.js",
    "revision": "5a6a2d49e5573cf08515989350e9d0d1"
  },
  {
    "url": "assets/js/25.fc1ee8de.js",
    "revision": "b3e09e67de24dcd2b83ea32bd4ac17bb"
  },
  {
    "url": "assets/js/26.25dee716.js",
    "revision": "4796c44a75c3dc096470aa9409f6b2af"
  },
  {
    "url": "assets/js/27.a2325a3a.js",
    "revision": "2e9bf0663763fb73731f6a1215f4d6a5"
  },
  {
    "url": "assets/js/28.f49108e8.js",
    "revision": "8ffb6fed967a93b7ac58b83e76bd6997"
  },
  {
    "url": "assets/js/29.af301c25.js",
    "revision": "a7e120bb1667c2c9e3ea2710b8d14465"
  },
  {
    "url": "assets/js/30.b35c1f16.js",
    "revision": "49b42e0ff0d29655007088835b58d0e0"
  },
  {
    "url": "assets/js/31.150c29ad.js",
    "revision": "ea354fc554bf43c0c18bda6353203daa"
  },
  {
    "url": "assets/js/4.b5a91810.js",
    "revision": "5e5cb1e07ad43f4aad2d3a26eb0ccae1"
  },
  {
    "url": "assets/js/5.2ebd0c6d.js",
    "revision": "dd85bd75ff67c261e2027d9d67e755e3"
  },
  {
    "url": "assets/js/6.03d2bf87.js",
    "revision": "34fd9bf5965b3e9be293a800fef0bf95"
  },
  {
    "url": "assets/js/7.906e6466.js",
    "revision": "1adc9ccd75cdd56026a3128aa8635202"
  },
  {
    "url": "assets/js/8.996b9924.js",
    "revision": "acf349114110b610b2afa8f7e63253fb"
  },
  {
    "url": "assets/js/9.2cda373c.js",
    "revision": "7e7ea0c00dd744465b158e49b2bda50c"
  },
  {
    "url": "assets/js/app.d0ac0da1.js",
    "revision": "1fa8382b347e01b080edd2b9f89bf31d"
  },
  {
    "url": "assets/js/vendors~flowchart.216ef086.js",
    "revision": "9b00d20b3d322ca3db0e036a03ee498f"
  },
  {
    "url": "auto.jpeg",
    "revision": "8ce3011616f31d665f2179edd2092518"
  },
  {
    "url": "banner.jpg",
    "revision": "38ad7665b3d03e2eb2edcf02347ea21e"
  },
  {
    "url": "categories/index.html",
    "revision": "faad134e54c2c4007e0f524f97818e42"
  },
  {
    "url": "categories/Vue/index.html",
    "revision": "297f304b7ca14aa279d76254a71d95ae"
  },
  {
    "url": "categories/Vue/page/2/index.html",
    "revision": "27f5c881fe9eb8f9d46ab036fe9bc123"
  },
  {
    "url": "categories/技术笔记/index.html",
    "revision": "7393839ced25aafab1f0f7e955d84880"
  },
  {
    "url": "head.jpg",
    "revision": "350e4ac403a28d3ee7580e76d27e3202"
  },
  {
    "url": "head.png",
    "revision": "9e98f9efba10bcad33519b782a1d09db"
  },
  {
    "url": "hero_black.png",
    "revision": "341621b18486ba4639bd2fa6fa5aab98"
  },
  {
    "url": "hero_old.png",
    "revision": "6e0567b30bfbca91471a5d5b886a13c5"
  },
  {
    "url": "hero_write.png",
    "revision": "944bdac8ed5e270e2e51db554b4c2232"
  },
  {
    "url": "index.html",
    "revision": "9f048ecab156acd1f9e1f1a9ad1fb316"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "2cd1a17ac3ee1578fa8f25467c15c73f"
  },
  {
    "url": "live2d/autoload.js",
    "revision": "767726c570dad7d1469fa5dba259937e"
  },
  {
    "url": "live2d/live2d.min.js",
    "revision": "ee7efff8ff5d1d4bd4a0ff99affd3ec7"
  },
  {
    "url": "live2d/waifu-tips.js",
    "revision": "e01c75f70a9465389471f638b1356bf8"
  },
  {
    "url": "live2d/waifu.css",
    "revision": "c0b987bdddfa732f8505a8d139bdb69b"
  },
  {
    "url": "tag/cdn/index.html",
    "revision": "f83af921e7d2abe2e77fbcb22427307e"
  },
  {
    "url": "tag/fetch/index.html",
    "revision": "094a8a1976cba9e8f795d5c7b07e2510"
  },
  {
    "url": "tag/index.html",
    "revision": "48186eecf26c8080bd12f23a2158d073"
  },
  {
    "url": "tag/javascript/index.html",
    "revision": "1fb439ccf91c33c4e61e1f723a4c810c"
  },
  {
    "url": "tag/keystoneJS/index.html",
    "revision": "f06cd1c0d690166b380e17170b7c7f5f"
  },
  {
    "url": "tag/mongoDB/index.html",
    "revision": "5c058c3912dfd553da0a130804964aa4"
  },
  {
    "url": "tag/node/index.html",
    "revision": "136a3cca70c883b1deb49c783d0c9577"
  },
  {
    "url": "tag/npm/index.html",
    "revision": "092c3c8739f4bae43c821cdc8c28c8b0"
  },
  {
    "url": "tag/rect/index.html",
    "revision": "1466c95dd01e61bdade0e62901e5f8a3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "692f26532bbaa050d8daae15df4194a3"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "c82a5496f505d54563ea3447bd29dd69"
  },
  {
    "url": "tag/webpack/index.html",
    "revision": "d1bcc27e819c05dd56717edc2c920d15"
  },
  {
    "url": "tag/wxParse/index.html",
    "revision": "77877312fe0c7f9ea98c3b86b037a41e"
  },
  {
    "url": "tag/个人简介/index.html",
    "revision": "eb65e36c14338dd65ccb10c42d564143"
  },
  {
    "url": "tag/小程序/index.html",
    "revision": "83f15196e6348d1d1a8fbaf3018069b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "286e96649cd68dd9443ae6b68208b737"
  },
  {
    "url": "views/auto/index.html",
    "revision": "94a60fff7202ffb1ff9fb98b87aa6794"
  },
  {
    "url": "views/index.html",
    "revision": "777f7d96f0b6c41b588d15c80bf4913d"
  },
  {
    "url": "views/Mongodb/2017/110101.html",
    "revision": "a33e6816ea87490aac0bd33d4dbd7b75"
  },
  {
    "url": "views/Mongodb/2017/110102.html",
    "revision": "779eb134e9a3563bfc6baf3b540c1d04"
  },
  {
    "url": "views/Vue/2017/052401.html",
    "revision": "60d70cab77f16492c663d40aeb6966a4"
  },
  {
    "url": "views/Vue/2017/121501.html",
    "revision": "1271c0939175922f711a3440c93bc00d"
  },
  {
    "url": "views/Vue/2017/122801.html",
    "revision": "d426ace59497f34ebf06b0606f4c2f2f"
  },
  {
    "url": "views/Vue/2018/010101.html",
    "revision": "1577f35bc49ef9ccbfc7bab863bed82b"
  },
  {
    "url": "views/Vue/2018/020401.html",
    "revision": "f31f41f46c96a81bf73909130c825b3d"
  },
  {
    "url": "views/Vue/2018/072601.html",
    "revision": "7421336d2a156ce1340d6fd16a3c0534"
  },
  {
    "url": "views/Vue/2018/081101.html",
    "revision": "66128009629c9abdbbd222093137e291"
  },
  {
    "url": "views/Vue/2018/081501.html",
    "revision": "5bed0480758373881660e4976659b738"
  },
  {
    "url": "views/Vue/2018/081502.html",
    "revision": "cbf137fb078bf9dbdd49946bbf2d5c4f"
  },
  {
    "url": "views/Vue/2018/091001.html",
    "revision": "4fae1de39fa853dcf77ffd74845fc4d0"
  },
  {
    "url": "views/Vue/2018/091301.html",
    "revision": "0fea88c54010effcf0deb16b29fd5a05"
  },
  {
    "url": "views/Vue/2018/110301.html",
    "revision": "9c699b4b9ba0175a7a103feb3c2ade74"
  },
  {
    "url": "views/Vue/2018/111301.html",
    "revision": "f4474ecf3cd39b674e71a8e1a9ac06a5"
  },
  {
    "url": "views/Vue/2019/061501.html",
    "revision": "f502e0cedf61851c02169fd3af8c070a"
  },
  {
    "url": "views/Vue/2019/072401.html",
    "revision": "c2deed336678d0feafcc978511480d28"
  },
  {
    "url": "wechat.jpg",
    "revision": "8bf799c30af4e4362754e8e88e3cc04b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
