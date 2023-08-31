(function () {

    const STYLES = {
        default: "note-secondary",
        pf: "note-secondary",
        proof: "note-secondary",
        example: "note-info",
        note: "note-warning",
    };

    function stringEmpty(s) {
        return s.match(/^[ \n\r\t]*$/);
    }

    function getTheVeryFirstElementChild(node) {
        if (!node || !node.firstChild) return;
        if (node.firstChild === node.firstElementChild)
            return node.firstChild;
        if (stringEmpty(node.firstChild.textContent))
            return node.firstElementChild;
        return;
    };

    let bqs = Array.prototype.slice.call( document.getElementsByTagName("blockquote") );

    bqs.forEach(bq => {
        let quote_type = "default";

        // the first underlined word in the first paragraph
        let first_words = getTheVeryFirstElementChild(getTheVeryFirstElementChild(bq));

        if (first_words?.tagName == 'U') {
            quote_type = first_words.innerHTML.toLowerCase().split(" ")[0];  // in case of `Example 1`

            if (!Object.hasOwn(STYLES, quote_type)) quote_type = 'default';
        }

        let note = document.createElement("div");
        note.innerHTML = bq.innerHTML;
        note.className = "note " + STYLES[quote_type];

        bq.replaceWith(note);
    });
})();