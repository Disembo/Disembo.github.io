(function() {
    let VIDEOS_CLOUD = "https://blog-media-1307399821.cos.ap-beijing.myqcloud.com";
    // let IMAGES_CLOUD = "https://blog-images-1307399821.cos.ap-beijing.myqcloud.com";
    let IMAGES_CLOUD = "https://gitee.com/disembo/media/raw/master";

    function loadVideos() {
        let video_root = document.getElementById("cloud-vid-root").getAttribute("value");
        if ('undefined' == video_root) return;

        var videos = document.querySelectorAll("video[cloud-vid]");
        videos = Array.prototype.slice.call( videos );
        console.log(videos);
        videos.forEach(video => {

            let source = video.firstElementChild;
            let name = /^.*\/media\/(.*)$/.exec(source.src)[1];  // src="*/media/*.mp4"

            source.src = VIDEOS_CLOUD + "/" + video_root + "/" + name;
            video.preload = 'metadata';

            Fluid.utils.waitElementVisible(video, function() {
                video.load();
            })
        });
    }

    function loadImages() {
        let img_root = document.getElementById("cloud-img-root").getAttribute("value");
        if ('undefined' == img_root) return;

        var imgs = document.querySelectorAll("img[cloud-img]");
        imgs = Array.prototype.slice.call( imgs );
        console.log(imgs);
        imgs.forEach(img => {
            // img.setAttribute("lazyload", true);
            let name = /^.*\/images\/(.*)$/.exec(img.src)[1];  // src="*/images/*.*"
            img.src = IMAGES_CLOUD + "/" + img_root + "/" + name;
        });
    }

    loadVideos();
    loadImages();

})();