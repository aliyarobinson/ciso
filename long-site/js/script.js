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

      // $("ul.news-feed").liScroll();

      /**************************************/
      /*   Navigation link click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.enter', function(e) {
        siteHeader.addClass('small');
        bkgdImgs.delay(1500).addClass('small');
        // mainContent.css('display','block').addClass('show');
        // siteFooter.css('display','block');
      });


      /**************************************/
      /*   Site Nav button animation on click
      /***************************************************/
      $('.site-nav a').on( CISO.clickHandler , function(e){
        e.preventDefault();
        var thisElem = $(this).attr('href');
        console.log('thisElem: ', thisElem);
        CISO.scrollTo(thisElem, 150);
      }); 

      $( window ).scroll(function() {
        $('html, body').stop(); // stops scrollToTop when user is scrolling
        var pagePosY = $(window).scrollTop();
        if (pagePosY >= 150){
          siteHeader.addClass('small');
          bkgdImgs.delay(1500).addClass('small');
        } else {
          // CBCL.categoryNav.removeClass('fixed');
        }
      });
    },

    scrollTo: function(elem) {

      console.log('************** scrollTop fired *****************');
      $('html,body').animate({
          scrollTop: $(elem).offset().top
      }, 1000);
    }
  };
})(jQuery); // end SEF

CISO.init();