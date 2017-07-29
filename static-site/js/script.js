// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.site-header');
  var bkgdImgs = $('.background-img');

  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

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
      /*   Navigation link click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.enter', function(e) {
        console.log('small'); 
        console.log('bkgdImgs: ', bkgdImgs); 
        siteHeader.addClass('small');
        bkgdImgs.addClass('small');
        bkgdImgs.find('.img').eq(1).fadeOut(800).addClass('faded');
      });


      /**************************************/
      /*   Site Nav button animation on click
      /***************************************************/
      $('.site-nav-btn').on( CISO.clickHandler , function(){

      }); 
    }
  };
})(jQuery); // end SEF

CISO.init();