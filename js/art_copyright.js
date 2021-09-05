(function(){
    let path = window.location.pathname;
    let footer = document.getElementsByTagName("footer")[0];

    let artInfo = document.createElement("div");
    artInfo.className = "footer-content";
    artInfo.style = "font-size: 0.85rem";
    artInfo.appendChild(document.createTextNode("Background image by "));
    let link = document.createElement("a");

    if ("/" == path) {  // home
        link.href = "https://www.deviantart.com/seven-teenth";
        let link_text = document.createTextNode("Seven-teenth");
        link.appendChild(link_text);
    } else {
        return;
    }

    artInfo.appendChild(link);
    footer.prepend(artInfo);
})()
