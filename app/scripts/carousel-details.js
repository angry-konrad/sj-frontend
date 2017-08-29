$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 3,
        lazyLoad: true,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-caret-left' aria-hidden='true'></i>","<i class='fa fa-caret-right' aria-hidden='true'></i>"]
    });
});
