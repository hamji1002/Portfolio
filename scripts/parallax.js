window.addEventListener("scroll", function() {
    const scroll = window.pageYOffset;
    document.querySelector('.content-item').style.transform = "translateY(" + scroll * .5 + "px)";
});
