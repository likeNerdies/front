$(document).on('scroll', function (e) {
    var opacity = $(document).scrollTop() / 500
    $('.navbar').css('background-color', 'rgba(255, 255, 255,'+opacity);
});

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        console.log("anchor: " + $anchor);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    /*$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });*/
