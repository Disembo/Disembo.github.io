(function() {

    function loadVideos() {
        let video_root = document.getElementById("cloud-video-root").getAttribute("value");

        var videos = document.querySelectorAll("video[cloud-video]");
        videos = Array.prototype.slice.call( videos );
        console.log(videos);
        videos.forEach(video => {

            let source = video.firstElementChild;
            let name = /^.*\/media\/(.*)$/.exec(source.src)[1];  // src="*/media/*.mp4"

            source.src = "https://blog-media-1307399821.cos.ap-beijing.myqcloud.com/" + video_root + "/" + name;
            
            video.load();
            video.pause();
        });
    }

    function loadImages() {
        let img_root = document.getElementById("git-img-root").getAttribute("value");

        var imgs = document.querySelectorAll("img[git-img]");
        imgs = Array.prototype.slice.call( imgs );
        console.log(imgs);
        imgs.forEach(img => {
            let name = /^.*\/images\/(.*)$/.exec(img.src)[1];  // src="*/images/*.*"
            img.src = "https://gitee.com/Disembo/media/raw/master/" + img_root + "/" + name;
        });
    }

    loadVideos();
    loadImages();

})();