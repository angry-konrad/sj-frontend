$(document).ready(function() {
    $('.details-description__link-more').click(() => {
        $('.details-description__transparent-overlay').hide();
        $('.details-description__link-more').hide();
        $('.details-description__text-block').addClass('extended');
    });
});