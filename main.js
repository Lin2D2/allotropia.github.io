function loadContent() {
    fragmentId = location.hash.substr(1);
    switch (fragmentId) {
        case "home":
            $("#app").load("home" + ".html");
            $("a.active").removeClass("active");
            $("#homeNav").addClass("active");
            break;
        case "blog":
            // TODO do Blog page or link
            document.getElementById("app").innerHTML = '<h2 style="text-align: center">Blog</h2>';
            $("a.active").removeClass("active");
            $("#blogNav").addClass("active");
            break;
        case "contact":
            // TODO do Contact page could use the part of the Impressum page
            document.getElementById("app").innerHTML = '<h2 style="text-align: center">Contact</h2>';
            $("a.active").removeClass("active");
            $("#contactNav").addClass("active");
            break;
        case "about":
            // TODO do About page, placeholder Impressum
            $("#app").load("imprint" + ".html");
            $("a.active").removeClass("active");
            $("#aboutNav").addClass("active");
            break;
        case "impressum":
            $("#app").load("imprint" + ".html");
            $("a.active").removeClass("active");
            $("#aboutNav").addClass("active");
            break;
        case "privacy":
            $("#app").load("privacy" + ".html");
            $("a.active").removeClass("active");
            // $("#privacyNav").addClass("active");
            break;
    }
}

window.addEventListener("hashchange", loadContent)

$(document).ready(loadContent);