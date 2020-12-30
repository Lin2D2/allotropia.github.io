function loadContent() {
    fragmentId = location.hash.substr(1);
    switch (fragmentId) {
        case "home":
            $("#app").load("home" + ".html");
            break;
        case "blog":
            // TODO do Blog page or link
            document.getElementById("app").innerHTML = '<h2 style="text-align: center">Blog</h2>';
            break;
        case "contact":
            // TODO do Contact page could use the part of the Impressum page
            document.getElementById("app").innerHTML = '<h2 style="text-align: center">Contact</h2>';
            break;
        case "about":
            // TODO do About page, placeholder Impressum
            $("#app").load("imprint" + ".html");
            break;
        case "impressum":
            $("#app").load("imprint" + ".html");
            break;
        case "privacy":
            $("#app").load("privacy" + ".html");
            break;
    }
}

if (!location.hash) {
    location.hash = "#home";
}

window.addEventListener("hashchange", loadContent)

loadContent();