'use strict';
(function ($) {
  $(document).ready(function () {
    $('.app-signin-input').jvFloat();
    var $mcNote = $('#app-signin-suggestion');
    Mailcheck.defaultDomains.push('tam.kreativkombinat.de')
    $('#ac-name').on('blur', function(event) {
        console.log("event ", event);
        console.log("this ", $(this));
        $(this).mailcheck({
            // domains: domains,                       // optional
            // topLevelDomains: topLevelDomains,       // optional
            suggested: function(element, suggestion) {
              // callback code
              console.log("suggestion ", suggestion.full);
              $mcNote.removeClass('hidden').addClass('fadeInDown');
              $mcNote.html("Meinten Sie <i>" + suggestion.full + "</i>?");
              $mcNote.on('click', function(evt) {
                evt.preventDefault();
                $('#ac-name').val(suggestion.full);
                $mcNote.removeClass('fadeInDown').addClass('fadeOutUp').delay(2000).addClass('hidden');
              });
            },
            empty: function(element) {
              // callback code
              $mcNote.html('').addClass('hidden');
            }
        });
    });
    $('input[type="password"]').showPassword('focus', {
        // toggle: { className: 'my-toggle' }
    });
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
    var bLazy = new Blazy({
        selector: '.b-lazy'
    });
  }
  );
}(jQuery));

