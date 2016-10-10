window.onscroll = function() {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var nav_bar = document.getElementById("side_nav");
    var top_nav = document.getElementById("top_nav");
    //console.log("top_nav height: " + top_nav.offsetHeight + " scroll: " + t);
    if (t > top_nav.offsetHeight)
        nav_bar.style.position = "fixed";
    else
        nav_bar.style.position = "relative";
    nav_bar.style.top = "0px";
};