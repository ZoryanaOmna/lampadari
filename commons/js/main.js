function resizeslider() {
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    var minHeight = 300;
    var headerHeight = $('.main-header').css('height');
    var sliderHeight = parseInt(winHeight) - parseInt(headerHeight);

    if (parseInt(winHeight) > minHeight) {
        if(parseInt(winWidth) >= 786){
            $('#main-slider').css('height', sliderHeight);
        }else{
            $('#main-slider').attr('style', '');
        }
    }
}

$(window).load(function () {
    resizeslider();
});

$(document).ready(function () {

    $(window).on('resize', function () {
        resizeslider();
    });

    $('.mobile-menu-button').click(function () {
        $('.main-navigation').toggleClass('in');
    });

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    $('.offers-button').click(function () {
        if ($('.offers-block').is('.up')) {
            $('.offers-block').removeClass('up');
        } else {
            $('.offers-block').addClass('up');
        }

    });

    $('#modal-link').click(function () {
        $('body').addClass('modal-open');
    });
    $('.modal-content-close').click(function () {
        $('body').removeClass('modal-open');
    });
});
