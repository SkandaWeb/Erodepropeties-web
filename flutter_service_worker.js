'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f4b4cdab5f94b42f93638461901546fd",
"assets/AssetManifest.bin.json": "968af178d7f6e960492d923d074cff8e",
"assets/AssetManifest.json": "93182a2b9d3393e6dcfa25cc68a84093",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"assets/assets/images/com-rent.png": "8d0e72eb4b78072cf8b5b9d37dc18584",
"assets/assets/images/com-sale.png": "6b2246dfcd161b61d3b766c6718c7080",
"assets/assets/images/flat-rent.png": "4c59f27e8a918a8a7d951457e39cfe0c",
"assets/assets/images/flat-sale.png": "98274dbe53f271c448a575f866fa654b",
"assets/assets/images/logo.png": "133a7408c78b3ab0f4fe4279faf536aa",
"assets/assets/images/plot-rent.png": "4bd88417ffc33c9281f081487b0ff0b4",
"assets/assets/images/plot-sale.png": "4d2aec0ae04388d0378ec8e12031eb00",
"assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"assets/assets/images/villa-rent.png": "7ba6057205739c9ea3931ae46e07918b",
"assets/assets/insta.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "56baf4a4088205dbc147374a7d530aa1",
"assets/NOTICES": "a22bbde596ec6a4ff6db692dbff5b34b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"Erodepropeties-web/.git/COMMIT_EDITMSG": "ea492920080e8b995ae4ab033b19d39f",
"Erodepropeties-web/.git/config": "787d28d024838609bb450f688f4501f0",
"Erodepropeties-web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Erodepropeties-web/.git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"Erodepropeties-web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Erodepropeties-web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Erodepropeties-web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Erodepropeties-web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Erodepropeties-web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Erodepropeties-web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Erodepropeties-web/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Erodepropeties-web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Erodepropeties-web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Erodepropeties-web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Erodepropeties-web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Erodepropeties-web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Erodepropeties-web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Erodepropeties-web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Erodepropeties-web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Erodepropeties-web/.git/index": "66c6872fdd7fa6870277298922383d6f",
"Erodepropeties-web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Erodepropeties-web/.git/logs/HEAD": "b1c68831d2fec45a110a4bf235b35760",
"Erodepropeties-web/.git/logs/refs/heads/main": "b1c68831d2fec45a110a4bf235b35760",
"Erodepropeties-web/.git/logs/refs/remotes/origin/HEAD": "9affc38940ee39949f22f4d0834747e7",
"Erodepropeties-web/.git/logs/refs/remotes/origin/main": "e0a3fb8c26987bedd7a6293020e9e1c7",
"Erodepropeties-web/.git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "cc729cbc1de09e26c8ac1c31cb284e98",
"Erodepropeties-web/.git/objects/07/3f31b564194e50ae8804991ef245829fc580c0": "1b482520d3d41abcca2fc427e03d9fb9",
"Erodepropeties-web/.git/objects/0f/f61e08b01444bba7562123bf22970cd321c5fe": "98fbeb5aea40e86d3ca6e6add0b8ec15",
"Erodepropeties-web/.git/objects/12/7ede896ecb1aad5142a69b9aba8199f1d0507c": "97635fb486afb17ab0027df076afaace",
"Erodepropeties-web/.git/objects/13/3691d4971029f3566556c36afec4dbcfe040cd": "0426c31354af5733d0141c307c5cb3cd",
"Erodepropeties-web/.git/objects/16/39426d3637636d38677164953a5565b2b17c32": "9cd3727f937bcffc877731e6132a5a10",
"Erodepropeties-web/.git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "c224d16fe69d48663a961825ab08bb0b",
"Erodepropeties-web/.git/objects/1b/05f6bb10c5dca5c4b8d663ec9eaddfa5b66be3": "9437f414099de54fb532bda2cec17639",
"Erodepropeties-web/.git/objects/25/f9ede9317f756285999d9e6f19ca28ad5b3763": "de7a82c4d2bc679eb17f03835d46d5dc",
"Erodepropeties-web/.git/objects/28/9eea6a87a8f1643d652238c83679518c6a6161": "3e9a1f41b04ecd9b05cd3ea8e07dede6",
"Erodepropeties-web/.git/objects/2b/fc5ab2879a35bea8bf9dce4f9548b916551729": "883ccd9ec6e7baf5132d34d6b7f18c2e",
"Erodepropeties-web/.git/objects/2c/269fd30b8f3ff684c6e85db1ff65160ea5ad59": "62f7d67f3b02a2f558c13f7da3c04398",
"Erodepropeties-web/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "f610cbe34ab930f142b6d073ab27deb5",
"Erodepropeties-web/.git/objects/2f/4f7311fbbc28eb8a570c813af36e025d80987a": "c42d157aa36e15cc636b0a5189e38102",
"Erodepropeties-web/.git/objects/34/145ae96a1919f9d5b8f8b76cbf4cc9a17dfad2": "e78776430bd58a790bcfb76ced29a8c3",
"Erodepropeties-web/.git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "707307abdda4f1fc08504b12b08018e6",
"Erodepropeties-web/.git/objects/3d/dbfe973ebec8a0f232027163fe2117c5cb6383": "d7be564abd2adba2a40caf91807d0a2e",
"Erodepropeties-web/.git/objects/42/3e1cc9bef37dde593b6b8ba61c868c3053c0fd": "ca72755baa09bbe6527950c3e5afe986",
"Erodepropeties-web/.git/objects/43/b5742fda9954ded4864ca20e765d9babaa6a9c": "c79cd382fec8d12501e6490a1f53a8d5",
"Erodepropeties-web/.git/objects/46/3dc2ba806bd6e527da4a4ab7a8838ea9419328": "b3781eda893b45012e34852b9c1bf513",
"Erodepropeties-web/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
"Erodepropeties-web/.git/objects/47/c7fce8f468c5d52a3a5f54effb3348e0fb00e7": "6eb27820366693c3531746c320dbe7a5",
"Erodepropeties-web/.git/objects/48/afb3e8c1bfff999ece0b58abc7567e94f8eba7": "f74f27e60bbb813948faaa5c49dac750",
"Erodepropeties-web/.git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "2eea3d52cb5524f7009f9e95a259eeb2",
"Erodepropeties-web/.git/objects/51/ad9fa7ee5d762dde3e081da638910b586d21cc": "44605aaba5438fe4435bcad871faeebc",
"Erodepropeties-web/.git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "8b3e4ca66c487684d03fb29c70fefbf1",
"Erodepropeties-web/.git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "0b86715160e6f64f628d3d3b7c64bc1b",
"Erodepropeties-web/.git/objects/5d/ffb2d41c7107418eaef4ed07cf980a0b0cc5b6": "310b1196e1ab9b05336e7f98e1b880a9",
"Erodepropeties-web/.git/objects/61/81afa883112845173241818fadd8d4c9e365f7": "5c56b6c1da319c420d04d397794ce68b",
"Erodepropeties-web/.git/objects/65/fd1cdaf0dd3228782319a3c7c0a620276fb32c": "607513d9adb943909adf658287acb77d",
"Erodepropeties-web/.git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
"Erodepropeties-web/.git/objects/6c/76bba522c4ecd29de9aaa755ecc04b4a34160f": "2cae5f70376aa0a6966e0260cd9e40f4",
"Erodepropeties-web/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c3ed1be52deaa5a5334678c624ecf031",
"Erodepropeties-web/.git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "675fb59ecbf118b82d6912b19ea6cbf1",
"Erodepropeties-web/.git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "ba717a2ffd20992ad3a6345f7496888a",
"Erodepropeties-web/.git/objects/75/796ac3ace30d2558bb51a779df4081a4e0cabe": "16263a4a51ecd79005e435f7df9dcd43",
"Erodepropeties-web/.git/objects/79/56ba84d4a02a965c20b17a9c4fdd22d35c6521": "8bf3eb6dfe85984d9df10f7c17e3fb43",
"Erodepropeties-web/.git/objects/79/e207b49cde95074e31029b1867f88b04363252": "ff0a2b6d25717fd700574fdca066dec6",
"Erodepropeties-web/.git/objects/79/f771c4a8fa52f95b0c65450e1d8ee2578c6dcf": "e7fa927bfa765e2b07cdd4e43aaf504d",
"Erodepropeties-web/.git/objects/7f/b056aa3af41502c205dcb2c98840d9e05ee87b": "d2727d914fb7f9c40c8823cc0a046289",
"Erodepropeties-web/.git/objects/89/61f1b3c49c6c75e23ca9086d0b28eb12f0c813": "26e66890f51ddb71b57af5b269f220b1",
"Erodepropeties-web/.git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "fa339762c088e28f2995954dc404562f",
"Erodepropeties-web/.git/objects/92/a565478b4ad60baec3aae5909d422c85eac63e": "814bb18b2308cdfbf41dca867671cae7",
"Erodepropeties-web/.git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "82a54dbd9be4e9c5a8843ac17c1592de",
"Erodepropeties-web/.git/objects/9c/9e1e16d28261c1d57f152897818da97af4576f": "5de5e14190ddf7c1ef7b9253f39a2473",
"Erodepropeties-web/.git/objects/9d/1617329760f111b99f122935b2fe7f2c9e17c8": "a0f67e4202d12b2f5295c6cf7fe5ef5c",
"Erodepropeties-web/.git/objects/9d/584811545e9a776a56396c871bdaccc0bf0185": "55c9ec83d8cb05a2da3a9369e4f7fdab",
"Erodepropeties-web/.git/objects/9d/93f87bfbecedac7f1f579055ab9e838e01aead": "8500eb207830d1340b674df9ba449307",
"Erodepropeties-web/.git/objects/a4/c21cd7dc26bd86fef4420ae0e0d1676c53d394": "4a1945fd2ed73955d32093f84b87582a",
"Erodepropeties-web/.git/objects/a5/4a1c8290195ec5d305861bdd36c5750aa295ec": "ca94543e3fafd9f4cfccdae07221a4dd",
"Erodepropeties-web/.git/objects/a7/f3ef723452fc137f764f0684851d668dd00084": "6123594770578f05a350b1d2df2dc7d2",
"Erodepropeties-web/.git/objects/a9/7d0c6fd270b109af7e8a4e06b8efbe47ee504d": "32bc8699241206b0dfaadf3c2150e744",
"Erodepropeties-web/.git/objects/aa/154ee7502345271c0a25de05c1c73b9206e93e": "2b3e14319ef24f351a123445d143e243",
"Erodepropeties-web/.git/objects/aa/527b585e02b57fb95619f7708fe7c0d3c01fbf": "a7806689e3ef7626642e61be3379b7b9",
"Erodepropeties-web/.git/objects/ac/95dcd24d1d03c43b146458274ea70b67ce8eab": "6a1155750aec1b09e40587ea1c571962",
"Erodepropeties-web/.git/objects/b8/a0c0e654f95b54c3655345b8d2315003e39cfa": "e72d37af70940a776a20164bd2a0f219",
"Erodepropeties-web/.git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "428a4edb52ecd286497311f863fe0655",
"Erodepropeties-web/.git/objects/b9/f64db649b367079dcc2ddf8f164936ea93b530": "4189f2fd2a4c6e6195d952814d1e0482",
"Erodepropeties-web/.git/objects/ba/8516667954ab2b8e41f542ad518df1e3169d93": "488e1c6396c82fea163e7101ed248e06",
"Erodepropeties-web/.git/objects/c1/da4b18de32de04e6faa647062fce215e1d5450": "a3f1096814aa0ea4c151b2c52799fae0",
"Erodepropeties-web/.git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6060cb588c8774586304298a5710f1f7",
"Erodepropeties-web/.git/objects/c7/84598a7683fe835119f631946ad574846c284b": "e17605a09c8f7ba55e7b4bc6da86e1b0",
"Erodepropeties-web/.git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "f647fc3d553ae429d751a2e73d60ecfe",
"Erodepropeties-web/.git/objects/cc/975a4882ea03bbf67850b159c184f4752fd9ba": "18f43c854f6151d52c23f54a82c86a02",
"Erodepropeties-web/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
"Erodepropeties-web/.git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "78b3a709f531a50ad7207eaac9279372",
"Erodepropeties-web/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "c394bb349d5f6a6517986a0734827215",
"Erodepropeties-web/.git/objects/e0/41a0fd7b86eb137b2dea0be4dbd99d9aa47a11": "55e10f7b5f2cecdeda092752e81484ed",
"Erodepropeties-web/.git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "239072de7f67c2c2ea9210561575948f",
"Erodepropeties-web/.git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
"Erodepropeties-web/.git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "a562cbece31d1405edfb5bf68a23b3dc",
"Erodepropeties-web/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
"Erodepropeties-web/.git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
"Erodepropeties-web/.git/objects/fa/fe3bad4191f274a7c0f59c9a469073dd262629": "5c1cd737e736bb01d71a98c834f0c2f1",
"Erodepropeties-web/.git/refs/heads/main": "8b648987e91e41e5ee27f56db2b729d8",
"Erodepropeties-web/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Erodepropeties-web/.git/refs/remotes/origin/main": "8b648987e91e41e5ee27f56db2b729d8",
"Erodepropeties-web/assets/AssetManifest.bin": "f4b4cdab5f94b42f93638461901546fd",
"Erodepropeties-web/assets/AssetManifest.bin.json": "968af178d7f6e960492d923d074cff8e",
"Erodepropeties-web/assets/AssetManifest.json": "93182a2b9d3393e6dcfa25cc68a84093",
"Erodepropeties-web/assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"Erodepropeties-web/assets/assets/facebook.png": "8c89ef8ab45d47ae9a954822532889f7",
"Erodepropeties-web/assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"Erodepropeties-web/assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"Erodepropeties-web/assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"Erodepropeties-web/assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"Erodepropeties-web/assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"Erodepropeties-web/assets/assets/images/7.png": "ffe093a5849d0f08a1531e9e241a0e0e",
"Erodepropeties-web/assets/assets/images/8.png": "f2900623e7d3b04ddb5af687ff2d01c7",
"Erodepropeties-web/assets/assets/images/com-rent.png": "8d0e72eb4b78072cf8b5b9d37dc18584",
"Erodepropeties-web/assets/assets/images/com-sale.png": "6b2246dfcd161b61d3b766c6718c7080",
"Erodepropeties-web/assets/assets/images/flat-rent.png": "4c59f27e8a918a8a7d951457e39cfe0c",
"Erodepropeties-web/assets/assets/images/flat-sale.png": "98274dbe53f271c448a575f866fa654b",
"Erodepropeties-web/assets/assets/images/logo.png": "133a7408c78b3ab0f4fe4279faf536aa",
"Erodepropeties-web/assets/assets/images/plot-rent.png": "4bd88417ffc33c9281f081487b0ff0b4",
"Erodepropeties-web/assets/assets/images/plot-sale.png": "4d2aec0ae04388d0378ec8e12031eb00",
"Erodepropeties-web/assets/assets/images/real_bg_1.png": "247814d388aea06744d95c7297273596",
"Erodepropeties-web/assets/assets/images/villa-rent.png": "7ba6057205739c9ea3931ae46e07918b",
"Erodepropeties-web/assets/assets/insta.png": "5c570427ee23f69853d28aec805eee79",
"Erodepropeties-web/assets/assets/linkedin.png": "d492efc706db983e74258dbd348f2208",
"Erodepropeties-web/assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"Erodepropeties-web/assets/assets/nodatafound.png": "248ef50c0361053ebe7269460031a4dc",
"Erodepropeties-web/assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"Erodepropeties-web/assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"Erodepropeties-web/assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"Erodepropeties-web/assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"Erodepropeties-web/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Erodepropeties-web/assets/fonts/MaterialIcons-Regular.otf": "56baf4a4088205dbc147374a7d530aa1",
"Erodepropeties-web/assets/NOTICES": "a22bbde596ec6a4ff6db692dbff5b34b",
"Erodepropeties-web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"Erodepropeties-web/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"Erodepropeties-web/assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"Erodepropeties-web/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"Erodepropeties-web/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"Erodepropeties-web/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"Erodepropeties-web/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"Erodepropeties-web/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"Erodepropeties-web/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"Erodepropeties-web/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"Erodepropeties-web/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"Erodepropeties-web/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"Erodepropeties-web/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"Erodepropeties-web/favicon.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"Erodepropeties-web/flutter_bootstrap.js": "ff7fd60aebacc3ff1d9ee6bac3ccc5df",
"Erodepropeties-web/icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/index.html": "7eea3d6008c2e378bebe076e4ab3600c",
"Erodepropeties-web/logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"Erodepropeties-web/main.dart.js": "1b59573e2997a843e02aa173b7c1344a",
"Erodepropeties-web/main.dart.js.br": "b190c9b1a5e890aca559c0d7a0732091",
"Erodepropeties-web/manifest.json": "965e1ad57e23fb720e84e3cc44598833",
"Erodepropeties-web/og-image.png": "18564495d08cd086935a645f635fa011",
"Erodepropeties-web/version.json": "2b04f4dd17f41ab45ea8ed44bfea692a",
"favicon.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a3b692756ce61f83d1a38f2c2acad58d",
"icons/Icon-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-192.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"icons/Icon-maskable-512.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"index.html": "c197bffd609c932d241d92a0c3459745",
"/": "c197bffd609c932d241d92a0c3459745",
"logo.png": "f3d7c3d96ff6fca1c5867c5db33f5d4a",
"main.dart.js": "372a416ae231e0ec370175ee0124a3b0",
"manifest.json": "965e1ad57e23fb720e84e3cc44598833",
"og-image.png": "18564495d08cd086935a645f635fa011",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
