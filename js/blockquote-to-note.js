(function () {

    let bqs = Array.prototype.slice.call( document.getElementsByTagName("blockquote") );

    bqs.forEach(bq => {
        bq.setAttribute("class", "note note-secondary");
    });
})();