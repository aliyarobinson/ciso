// "use strict"; 

var CISO = CISO || {};

(function($){
  var siteHeader = $('.homepage .site-header');
  var bkgdImgs = $('.homepage .background-img');
  var intro = $('.homepage .intro');
  var loader = $('.loader');

  var quiz = [
  {
    "qmID": "01",
    "qmQuest": "",
    "qmInfo": ["Find what immigration option may be available to you"],
    "qmOpts": [
        {"optTag":"Start", "optAns": "02", "optClass": "single-opt"}
    ]
  },
  {
    "qmID": "02",
    "qmQuest": "Do you have a job opportunity in the U.S.?",
    "qmInfo": [],
    "qmOpts": [
        {"optTag":"Yes", "optAns": "03", "optClass": "yes-opt"},
        {"optTag":"No", "optAns": "??", "optClass": "no-opt"}
    ]
  },
  {
    "qmID": "03",
    "qmQuest": "Already in U.S.?",
    "qmInfo": [],
    "qmOpts": [
        {"optTag":"Yes", "optAns": 04, "optClass": "yes-opt"},
        {"optTag":"No", "optAns": "??", "optClass": "no-opt"}
    ]
  },
  {
    "qmID": "04",
    "qmQuest": "In legal status?",
    "qmInfo": [],
    "qmOpts": [
        {"optTag":"Yes", "optAns": 05, "optClass": "yes-opt"},
        {"optTag":"No", "optAns": "??", "optClass": "no-opt"}
    ]
  },
  {
    "qmID": "05",
    "qmQuest": "Working on H1, L1, etc?",
    "qmInfo": [],
    "qmOpts": [
        {"optTag":"Yes", "optAns": 05, "optClass": "yes-opt"},
        {"optTag":"No", "optAns": "??", "optClass": "no-opt"}
    ]
  },
  {
    "qmID": "06",
    "qmQuest": "What category?",
    "qmInfo": ["You may start employment-based immigration process."],
    "qmOpts": [
        {"optTag":"EB-1: blah blah", "optAns": "??", "optClass": "multi-opt"},
        {"optTag":"EB-2: blah blah", "optAns": "??", "optClass": "multi-opt"},
        {"optTag":"EB-3: blah blah", "optAns": "??", "optClass": "multi-opt"},
        {"optTag":"EB-4: blah blah", "optAns": "??", "optClass": "multi-opt"},
        {"optTag":"EB-5: blah blah", "optAns": "??", "optClass": "multi-opt"},
    ]
  }
];


  CISO = { 
    clickHandler: ('ontouchstart' in document.documentElement ? "touchstart" : "click"),

    init: function () {
      console.log('init');

      $(window).load(function() {
          // loader.delay( 1200 ).addClass('collapsed');
          loader.addClass('collapsed');
          intro.delay(800).addClass('animate');
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
        // window.setTimeout(function(){
        //   location.pathname = 'aliyayrobinson/design-assets/chaka/ciso_website/static-site/' + 'about.html';
        // }, 1000);
      });


      /**************************************/
      /*   Quiz Option click
      /***************************************************/
      $(document).on( CISO.clickHandler , '.quiz-opts button', function(e) {
        console.log('quiz opt click');
        var currModObj = $(this).closest('.quiz-mod');
        var currMod = currModObj.attr('id');
        var currModData = {};
        var nextModData = {};
        var questStr = "";
        var infoStr = "";
        var optsStr = "";

        var questObj = currModObj.find('.quiz-quest');
        var optsObj = currModObj.find('.quiz-opts');
        var infoObj = currModObj.find('.quiz-info');

        var optIdx = $(this).parent().index();
        for (i = 0; i < quiz.length; i++) {
          if(quiz[i].qmID == currMod){
            console.log("eureka!");
            currModData = quiz[i];
            console.log("currModData: ", currModData);
          }
        }

        var nextModID = currModData.qmOpts[optIdx].optAns;
        for (i = 0; i < quiz.length; i++) {
          if(quiz[i].qmID == nextModID){
            console.log("eureka again!");
            nextModData = quiz[i];
            console.log("nextModData: ", nextModData);
          }
        }

        var nextQuest = nextModData.qmQuest;

        var nextInfo = function(){
          for (i = 0; i < nextModData.qmInfo.length; i++) {
              infoStr += '<li>' + nextModData.qmInfo[i] + '</li>';
          }

          return infoStr;
        };

        var nextOpts = function(){
          for (i = 0; i < nextModData.qmOpts.length; i++) {
              optsStr += '<li><button class="'+nextModData.qmOpts[i].optClass+'">' + nextModData.qmOpts[i].optTag + '</button></li>';
          }

          return optsStr;
        };
        
        currModObj.attr('id', nextModID);
        questObj.empty().html(nextQuest);
        optsObj.empty().html(nextOpts);
        infoObj.empty().html(nextInfo);

        // $.ajax({ 
        //   type: 'GET', 
        //   dataType: 'jsonp', 
        //   async: false, 
        //   url: './js/quiz.json', 
        //   success: function (data) { 
        //     for (i = 0; i < data.length; i++) {
        //       if(data[i].qmID == currMod){
        //         console.log("eureka!");
        //       }
        //     }
        //   } 
        // });
      });



    }
  };
})(jQuery); // end SEF

CISO.init();