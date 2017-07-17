// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.site-header');
  var bkgdImgs = $('.background-img');
  var mainContent = $('.site-content');
  var siteFooter = $('.site-footer');
  var $win = $(window),
      $doc = $(document);

  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

      sectionScrolling();
      stickyNav();

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
      // $('.site-nav a').on( CISO.clickHandler , function(e){
      //   e.preventDefault();
      //   var thisElem = $(this).attr('href');
      //   console.log('thisElem: ', thisElem);
      //   CISO.scrollTo(thisElem, 150);
      // }); 

      /*$( window ).scroll(function() {
        $('html, body').stop(); // stops scrollToTop when user is scrolling
        var pagePosY = $(window).scrollTop();
        if (pagePosY >= 150){
          siteHeader.addClass('small');
          bkgdImgs.delay(1500).addClass('small');
        } else {
          // CBCL.categoryNav.removeClass('fixed');
        }
      });*/



      function stickyNav() {

        var body = $('body'),
            nav = $('.site-nav > ul'),
            header = $('.site-header'),
            headerOffset = header.outerHeight();

        $win.scroll(function() {

          if ($(this).scrollTop() >= headerOffset) {
            siteHeader.addClass('small');
            bkgdImgs.delay(1500).addClass('small');
            // body.addClass('sticky-nav-engaged');
            // nav.addClass('sticky');

          } else {

            // body.removeClass('sticky-nav-engaged');
            // nav.removeClass('sticky');

          }
     
        });

      }

      function scrollTo(id, opts) {

        var nav = $('.site-nav > ul'),
            navOffset = 80,
            targetOffset,
            defaults = {
              addedOffset: 0,
              speed: 500
            }
            opts = $.extend({}, defaults, opts);

        targetOffset = navOffset + opts.addedOffset;

        $('html,body').animate({
          scrollTop: $(id).offset().top - targetOffset
        }, opts.speed);

      }

      function sectionScrolling() {

        var nav = $('.site-nav > ul'),
            navOffset = $('.site-header').outerHeight(),
            section = $('.section'),
            navItem = nav.find('li'),
            navLink = nav.find('a');

        // add data count to each section
        section.each(function(index) {

          $(this).attr('data-count', index);

        });

        // nav click through scrolling
        navLink.on('click', function(){

          var hash = $(this).attr('href');

          console.log('hash: ', hash);

          scrollTo(hash);

          if(nav.hasClass('active')) {
            nav.removeClass('active');
            // $('#toggle-nav').removeClass('active');
          }

          return false;

        });

        // page scroll position detection
        /*$win.on('scroll resize', function() {

          var currentPosition = $(this).scrollTop();

          navLink.removeClass('active');

          section.removeClass('active').each(function() {

            var top = $(this).offset().top - navOffset, // height of sticky nav
                bottom = top + $(this).outerHeight();

            if(currentPosition >= top && currentPosition < bottom) {

              var link = $('a[href="#' + this.id + '"]');
              link.addClass('active');
              $(this).addClass('active');

              var sectionCount = $(this).attr('data-count');

            }

          });
        });*/

      }
    }



    /*,scrollTo: function(elem) {

      console.log('************** scrollTop fired *****************');
      $('html,body').animate({
          scrollTop: $(elem).offset().top
      }, 1000);
    }*/
  };
})(jQuery); // end SEF

CISO.init();