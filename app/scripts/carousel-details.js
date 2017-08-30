$(document).ready(function() {
    $('.carousel-details__owl').owlCarousel({
        items: 4,
        lazyLoad: true,
        loop: true,
        dots: false,
        margin: 10,
        nav: true,
        navText: ['<i class=\'fa fa-angle-left\' aria-hidden=\'true\'></i>','<i class=\'fa fa-angle-right\' aria-hidden=\'true\'></i>'],
        responsive : {
            0 : {
                items: 2,
                margin: -30
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
        navText: ['<i class=\'fa fa-angle-left\' aria-hidden=\'true\'></i>','<i class=\'fa fa-angle-right\' aria-hidden=\'true\'></i>'],
    });
});
