$(function(){

  var nav_height = $('nav').height();

  // before any scrolling see where page is at
  var initial_pos = $(window).scrollTop();

  if(initial_pos > nav_height) {
    // display small menu
    $('.small-menu').show();
    $('.subscribe').hide();
  }
  else {
    // display subscribe
    $('.small-menu').hide();
    $('.subscribe').show();
  }

  $(window).scroll(function () {
    var cur_pos = $(window).scrollTop();

    if (cur_pos > nav_height){
      $('.subscribe').fadeOut(500, function() {
         $('.small-menu').fadeIn(500);
      });
    }
    else {
      $('.small-menu').fadeOut(500, function() {
         $('.subscribe').fadeIn(500);
      });
    }
  });
});
