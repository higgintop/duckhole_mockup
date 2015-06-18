$(function(){

  var timer = null;
  var navHeight = $('nav').height();
  var $window = $(window);
  var $subscribe = $('.subscribe')
  var $smallMenu = $('.small-menu')

  $window.scroll(function () {
    // Clear Timeout if one is pending
    if(timer) {
      clearTimeout(timer);
      timer = null;
    }
    // Set Timeout
    timer = setTimeout(function(){
      onScroll();
    }, 250); 
  });

  function onScroll() {
    timer = null;
    var top_offset = $window.scrollTop();
    if (top_offset > navHeight) {
       $subscribe.addClass('hidden');
       $smallMenu.removeClass('hidden');
    } else {
       $smallMenu.addClass('hidden');
       $subscribe.removeClass('hidden');
    }
  }
});
