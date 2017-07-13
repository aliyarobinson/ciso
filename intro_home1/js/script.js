// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.site-header');
  var bkgdImgs = $('.background-img');
  var mainContent = $('.site-content');
  var siteFooter = $('.site-footer');

  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

      /**************************************/
      /*   Navigation link click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.enter', function(e) {
        siteHeader.addClass('small');
        bkgdImgs.delay(1500).addClass('small');
        mainContent.css('display','block').addClass('show');
        siteFooter.css('display','block');
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