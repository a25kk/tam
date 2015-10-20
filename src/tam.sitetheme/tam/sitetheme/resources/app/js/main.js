'use strict';
(function ($) {
    $(document).ready(function () {
        if ($('body').hasClass('lt-ie7')) {
            return;
        }
        $('.owl-carousel').owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            nav: true,
            navText: ['&#x276e;','&#x276f;'],
            animateOut: 'fadeOut',
            margin: 10,
            autoHeight: true,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true
        });
        $('[data-appui="tooltip"]').tooltip();
    });
}(jQuery));
