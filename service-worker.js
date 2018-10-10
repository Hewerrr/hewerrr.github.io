var cacheName = 'videoPWA-3';

var filesToCache = [
    "./1/images/10_big.jpg",
    "./1/images/10_ogl.jpg",
    "./1/images/11_big.jpg",
    "./1/images/11_ogl.jpg",
    "./1/images/12_big.jpg",
    "./1/images/12_ogl.jpg",
    "./1/images/1_big.jpg",
    "./1/images/1st_slide_bg.png",
    "./1/images/2_big.jpg",
    "./1/images/2_ogl.jpg",
    "./1/images/3_big.jpg",
    "./1/images/3_ogl.jpg",
    "./1/images/4_big.jpg",
    "./1/images/4_ogl.jpg",
    "./1/images/5_big.jpg",
    "./1/images/5_ogl.jpg",
    "./1/images/6_big.jpg",
    "./1/images/6_ogl.jpg",
    "./1/images/7_big.jpg",
    "./1/images/7_ogl.jpg",
    "./1/images/8_big.jpg",
    "./1/images/8_ogl.jpg",
    "./1/images/9_big.jpg",
    "./1/images/9_ogl.jpg",
    "./1/images/begin.svg",
    "./1/images/big_green_block.svg",
    "./1/images/course.css",
    "./1/images/green_block.svg",
    "./1/images/hide_grey.png",
    "./1/images/ico_back_bg.svg",
    "./1/images/ico_back_hover.svg",
    "./1/images/ico_back_inactive.svg",
    "./1/images/ico_contents_bg.svg",
    "./1/images/ico_contents_hover.svg",
    "./1/images/ico_contents_inactive.svg",
    "./1/images/ico_info_seagreen.svg",
    "./1/images/ico_next_bg.svg",
    "./1/images/ico_next_hover.svg",
    "./1/images/ico_next_inactive.svg",
    "./1/images/ico_round_electro.svg",
    "./1/images/ico_round_electro_hover.svg",
    "./1/images/ico_round_eyeglasses.svg",
    "./1/images/ico_round_eyeglasses_hover.svg",
    "./1/images/ico_round_hardhat.svg",
    "./1/images/ico_round_hardhat_hover.svg",
    "./1/images/ico_round_mittens.svg",
    "./1/images/ico_round_mittens_hover.svg",
    "./1/images/ico_round_obuv.svg",
    "./1/images/ico_round_obuv_hover.svg",
    "./1/images/ico_round_organovsluha.svg",
    "./1/images/ico_round_organovsluha_hover.svg",
    "./1/images/ico_round_padenia.svg",
    "./1/images/ico_round_padenia_hover.svg",
    "./1/images/ico_round_respiratory.svg",
    "./1/images/ico_round_respiratory_hover.svg",
    "./1/images/ico_round_suit.svg",
    "./1/images/ico_round_suit_hover.svg",
    "./1/images/ico_zoomin_bg.svg",
    "./1/images/ico_zoomin_hover.svg",
    "./1/images/ico_zoomin_inactive.svg",
    "./1/images/ico_zoomout_bg.svg",
    "./1/images/ico_zoomout_hover.svg",
    "./1/images/ico_zoomout_inactive.svg",
    "./1/images/icon_vid.svg",
    "./1/images/marker.svg",
    "./1/images/marker_gray.svg",
    "./1/images/marker_red.svg",
    "./1/images/progress_active.svg",
    "./1/images/progress_unvisited.svg",
    "./1/images/progress_visited.svg",
    "./1/images/rule10_150.svg",
    "./1/images/rule10_95_blue.svg",
    "./1/images/rule10_95_gray.svg",
    "./1/images/rule10_95_green.svg",
    "./1/images/rule11_150.svg",
    "./1/images/rule11_95_blue.svg",
    "./1/images/rule11_95_gray.svg",
    "./1/images/rule11_95_green.svg",
    "./1/images/rule12_150.svg",
    "./1/images/rule12_95_blue.svg",
    "./1/images/rule12_95_gray.svg",
    "./1/images/rule12_95_green.svg",
    "./1/images/rule1_150.svg",
    "./1/images/rule1_95_blue.svg",
    "./1/images/rule1_95_gray.svg",
    "./1/images/rule1_95_green.svg",
    "./1/images/rule1_slide.jpg",
    "./1/images/rule2_150.svg",
    "./1/images/rule2_95_blue.svg",
    "./1/images/rule2_95_gray.svg",
    "./1/images/rule2_95_green.svg",
    "./1/images/rule3_150.svg",
    "./1/images/rule3_95_blue.svg",
    "./1/images/rule3_95_gray.svg",
    "./1/images/rule3_95_green.svg",
    "./1/images/rule4_150.svg",
    "./1/images/rule4_95_blue.svg",
    "./1/images/rule4_95_gray.svg",
    "./1/images/rule4_95_green.svg",
    "./1/images/rule5_150.svg",
    "./1/images/rule5_95_blue.svg",
    "./1/images/rule5_95_gray.svg",
    "./1/images/rule5_95_green.svg",
    "./1/images/rule6_150.svg",
    "./1/images/rule6_95_blue.svg",
    "./1/images/rule6_95_gray.svg",
    "./1/images/rule6_95_green.svg",
    "./1/images/rule7_150.svg",
    "./1/images/rule7_95_blue.svg",
    "./1/images/rule7_95_gray.svg",
    "./1/images/rule7_95_green.svg",
    "./1/images/rule8_150.svg",
    "./1/images/rule8_95_blue.svg",
    "./1/images/rule8_95_gray.svg",
    "./1/images/rule8_95_green.svg",
    "./1/images/rule9_150.svg",
    "./1/images/rule9_95_blue.svg",
    "./1/images/rule9_95_gray.svg",
    "./1/images/rule9_95_green.svg",
    "./1/images/seagreenblock_bottom.svg",
    "./1/images/siz_frame.svg",
    "./1/images/tiles.svg",
    "./1/images/titul_bg.png",
    "./1/images/titul_boxes.svg",
    "./1/images/vid10.mp4",
    "./1/images/vid11.mp4",
    "./1/images/vid12.mp4",
    "./1/images/vid2.mp4",
    "./1/images/vid3.mp4",
    "./1/images/vid4.mp4",
    "./1/images/vid5.mp4",
    "./1/images/vid6.mp4",
    "./1/images/vid7.mp4",
    "./1/images/vid8.mp4",
    "./1/images/vid9.mp4",
    "./1/module.js",
    "./1/runtime.xml",
    "./1/splash.xml",
    "./1/start.html",
    "./autorun.html",
    "./courseimages/1blank.gif",
    "./courseimages/agenthub.swf",
    "./courseimages/cl-fonts.css",
    "./courseimages/cl.js",
    "./courseimages/click1.mp3",
    "./courseimages/click1.ogg",
    "./courseimages/click1.swf",
    "./courseimages/click2.mp3",
    "./courseimages/click2.ogg",
    "./courseimages/click2.swf",
    "./courseimages/click3.mp3",
    "./courseimages/click3.ogg",
    "./courseimages/click3.swf",
    "./courseimages/click4.mp3",
    "./courseimages/click4.ogg",
    "./courseimages/click4.swf",
    "./courseimages/courselab.css",
    "./courseimages/courselab.js",
    "./courseimages/cursor_arrow.png",
    "./courseimages/cursor_click.png",
    "./courseimages/dummy.swf",
    "./courseimages/failure1.mp3",
    "./courseimages/failure1.ogg",
    "./courseimages/failure1.swf",
    "./courseimages/failure2.mp3",
    "./courseimages/failure2.ogg",
    "./courseimages/failure2.swf",
    "./courseimages/failure3.mp3",
    "./courseimages/failure3.ogg",
    "./courseimages/failure3.swf",
    "./courseimages/failure4.mp3",
    "./courseimages/failure4.ogg",
    "./courseimages/failure4.swf",
    "./courseimages/jquery-ui.js",
    "./courseimages/jquery.addons.js",
    "./courseimages/jquery.js",
    "./courseimages/legacy.js",
    "./courseimages/lms.js",
    "./courseimages/over1.mp3",
    "./courseimages/over1.ogg",
    "./courseimages/over1.swf",
    "./courseimages/over2.mp3",
    "./courseimages/over2.ogg",
    "./courseimages/over2.swf",
    "./courseimages/over3.mp3",
    "./courseimages/over3.ogg",
    "./courseimages/over3.swf",
    "./courseimages/over4.mp3",
    "./courseimages/over4.ogg",
    "./courseimages/over4.swf",
    "./courseimages/progress.gif",
    "./courseimages/success1.mp3",
    "./courseimages/success1.ogg",
    "./courseimages/success1.swf",
    "./courseimages/success2.mp3",
    "./courseimages/success2.ogg",
    "./courseimages/success2.swf",
    "./courseimages/success3.mp3",
    "./courseimages/success3.ogg",
    "./courseimages/success3.swf",
    "./courseimages/success4.mp3",
    "./courseimages/success4.ogg",
    "./courseimages/success4.swf"
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
})

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});