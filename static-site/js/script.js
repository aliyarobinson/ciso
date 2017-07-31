// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.homepage .site-header');
  var bkgdImgs = $('.homepage .background-img');
  var intro = $('.homepage .intro');
  var loader = $('.loader');

  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

      $(window).load(function() {
          // loader.delay( 1200 ).addClass('collapsed');
          loader.addClass('collapsed');
      });

      $('.menu-btn').on('click', function(e){
        $(this).toggleClass('active');
        $('.site-header').toggleClass('active');

      });

      $('dt').on('click', function(e){
        // $(this).closest('dl').find('.active').toggleClass('active');
        $(this).toggleClass('active');
      });

      $(".news-list .news-content").mCustomScrollbar();

      /**************************************/
      /*   Intro Enter click
      /***************************************************/

      $(document).on( CISO.clickHandler , 'button.enter', function(e) {
        console.log('enter click');
        siteHeader.addClass('reveal');
        intro.addClass('remove');
        window.setTimeout(function(){
          location.pathname = 'aliyayrobinson/design-assets/chaka/ciso_website/static-site/' + 'about.html';
        }, 1000);
        // bkgdImgs.delay(1500).addClass('small');
      });

    }
  };
})(jQuery); // end SEF

CISO.init();