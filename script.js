$(document).on('scroll', function (e) {
    var opacity = $(document).scrollTop() / 500
    $('.navbar').css('background-color', 'rgba(255, 255, 255,'+opacity);
});
