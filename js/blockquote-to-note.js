(function () {

    let STYLES = {
        default: "note-secondary",
        pf: "note-secondary",
        proof: "note-secondary",
        example: "note-info",
        note: "note-warning",
    };

    let bqs = Array.prototype.slice.call( document.getElementsByTagName("blockquote") );

    bqs.forEach(bq => {
        var quote_type = "default";

        // the first underlined word in the first paragraph
        var first_words = bq.firstElementChild?.firstElementChild;

        if (first_words?.tagName == 'U') {
            quote_type = first_words.innerHTML.toLowerCase();

            // in case of `Example 1`
            quote_type = quote_type.split(" ")[0];
        }

        var note = document.createElement("div");
        note.innerHTML = bq.innerHTML;
        note.className = "note " + STYLES[quote_type];

        bq.replaceWith(note);
    });
})();