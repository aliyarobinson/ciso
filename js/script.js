// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.site-header');
  var bkgdImgs = $('.background-imgs');

  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

      /**************************************/
      /*   Navigation link click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.enter', function(e) {
        console.log('small'); 
        siteHeader.addClass('small');
        bkgdImgs.addClass('small');
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