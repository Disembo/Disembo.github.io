(function () {

    let bqs = Array.prototype.slice.call( document.getElementsByTagName("blockquote") );

    bqs.forEach(bq => {
        var note = document.createElement("div");
        note.innerHTML = bq.innerHTML;
        note.className = "note note-secondary";
        bq.replaceWith(note);
    });
})();