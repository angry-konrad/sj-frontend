$(document).ready(function() {
    $('.carousel-details__owl').owlCarousel({
        items: 3,
        lazyLoad: true,
        loop: false,
        dots: false,
        margin: 10,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
        responsive : {
            0 : {
                items: 2
            },
            768 : {
                items: 4
            }
        },
    });

    $('.carousel-photos__owl').owlCarousel({
        items: 1,
        lazyLoad: true,
        loop: true,
        dots: false,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"],
    });
});
