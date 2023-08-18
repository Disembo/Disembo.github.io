// (function() {
//     let VIDEOS_CLOUD = "https://blog-media-1307399821.cos.ap-beijing.myqcloud.com";
//     let IMAGES_CLOUD = "https://gitee.com/disembo/media/raw/master";  // backup: tencent

//     function loadVideos(video_root) {
//         if (undefined === video_root) return;

//         var videos = document.querySelectorAll("video[cloud-vid]");
//         videos = Array.prototype.slice.call( videos );
//         videos.forEach(video => {

//             let source = video.firstElementChild;
//             let name = /^.*\/media\/(.*)$/.exec(source.src)[1];  // src="*/media/*.mp4"

//             source.src = VIDEOS_CLOUD + "/" + video_root + "/" + name;
//             video.preload = 'metadata';

//             Fluid.utils.waitElementVisible(video, function() {
//                 video.load();
//             })
//         });
//     }

//     function loadImages(image_root) {
//         if (undefined === image_root) return;

//         var imgs = document.querySelectorAll("img[cloud-img]");
//         imgs = Array.prototype.slice.call( imgs );
//         imgs.forEach(img => {
//             img.setAttribute("lazyload", true);
//             let name = /^.*\/images\/(.*)$/.exec(img.src)[1];  // src="*/images/*.*"
//             img.src = IMAGES_CLOUD + "/" + image_root + "/" + name;
//         });
//     }

//     let mediaRoot = document.getElementsByTagName('meta')['cloud-media-root']?.content;

//     loadVideos(mediaRoot);
//     loadImages(mediaRoot);

// })();