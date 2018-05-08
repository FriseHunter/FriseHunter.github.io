$(window).scroll(function() {
	// anomated of quality ******************************
    $('.movLeft').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        $(this).addClass('fadeInLeft');
      }
    });
    $('.movUp').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        $(this).addClass('fadeInUp');
      }
    });
    $('.movRight').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+650) {
        $(this).addClass('fadeInRight');
      }
    });
    // anomated of guarantees ******************************
    $('.movLeft_1').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+600) {
        $(this).addClass('fadeInLeft');
      }
    });
    $('.movLeft_2').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+710) {
        $(this).addClass('fadeInLeft');
      }
    });
    $('.movLeft_3').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+820) {
        $(this).addClass('fadeInLeft');
      }
    });
    $('.movLeft_4').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+930) {
        $(this).addClass('fadeInLeft');
      }
    });
  });