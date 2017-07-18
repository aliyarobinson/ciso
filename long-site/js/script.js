// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.site-header');
  var intro = $('body > .intro');
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

      window.onhashchange = function(e) {
        e.preventDefault();

        var thisHash = location.hash;
        CISO.scrollTo(thisHash);

        siteHeader.find('a[href="'+thisHash+'"]').closest('li').siblings('li').removeClass('active');
        siteHeader.find('a[href="'+thisHash+'"]').closest('li').addClass('active');


      };

      // $("ul.news-feed").liScroll();

      /**************************************/
      /*   Navigation link click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.enter', function(e) {
        siteHeader.addClass('reveal');
        intro.addClass('remove');
        bkgdImgs.delay(1500).addClass('small');
      });

      function stickyNav() {
        var body = $('body'),
            nav = $('.site-nav > ul'),
            header = $('.site-header'),
            headerOffset = header.outerHeight();

        $win.scroll(function() {

          if ($(this).scrollTop() >= headerOffset) {
            if ( !intro.hasClass('remove') ){
              intro.addClass('remove');
            }
            siteHeader.addClass('reveal');
            bkgdImgs.delay(1500).addClass('small');
          }
        });
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
          var thisLink = $(this).closest('li');

          console.log('hash: ', hash);

          location.hash = hash;

          CISO.scrollTo(hash);
          thisLink.siblings('li').removeClass('active');
          thisLink.addClass('active');

          if(nav.hasClass('active')) {
            nav.removeClass('active');
            // $('#toggle-nav').removeClass('active');
          }

          return false;

        });

      }

      function showHeader() {
        siteHeader.addClass('reveal');
      }

      function showIntro() {

      }

      function removeIntro() {

      }

    },

    scrollTo: function(id, opts) {

        var nav = $('.site-nav > ul'),
            navOffset = 150,
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


  };
})(jQuery); // end SEF

CISO.init();