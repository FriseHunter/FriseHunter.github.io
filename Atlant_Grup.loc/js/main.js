$(window).scroll(function(par){

	// first progress bar**************************************************
	
	  $('.after.first.circle').circleProgress({
    value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: 0.05,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(10 * progress) + '<br><p>БОЛЕЕ</p>');
  });

  	// second progress bar*************************************************
  	
	  $('.after.second.circle').circleProgress({
    value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: 0.6,
    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(7 * progress) + '<br><p>БОЛЕЕ</p>');
  });
  	
  	// threed progress bar*************************************************
	
	  $('.after.threed.circle').circleProgress({
    value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: -1.6,
    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(120 * progress) + '<br><p>БОЛЕЕ</p>');
  });
	
	// fourth progress bar*************************************************
	
	  $('.after.fourth.circle').circleProgress({
    value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: 0.0,
    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(1 * progress) + 'млн' + "<p>БОЛЕЕ</p>");
  });
  	
  	// fiveth progress bar*************************************************
	
	  $('.after.fiveth.circle').circleProgress({
   value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: -1.0,
    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(50 * progress) + 'млн' + "<p>БОЛЕЕ</p>");
  });
  	
  	// sixth progress bar**************************************************
	
	  $('.after.sixth.circle').circleProgress({
       value: 1.0,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 2500,
      easing: 'circleProgressEasing'
    },
    fill:{ 
      color: '#ffffff' 
    },
    emptyFill: 'rgba(200, 200, 200, .2)',
    startAngle: -2.5,
    
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(1000 * progress) + "<p>БОЛЕЕ</p>");
  });



});

$(window).scroll(function(){

  var st = $(this).scrollTop();
  $('.main_offer').css({
    "transform" : 'translate(0%,' + st /25 + '%)',
    "-webkit-transform" : 'translate(0%,' + st /25 + '%)',
    "-ms-transform" : 'translate(0%,' + st /25 + '%)',
    "-o-transform"  : 'translate(0%,' + st /25 + '%)'
  });
});

// Плавный скрол**********************
 
$(document).ready(function(){
  //ancors of main menu & landing buttons
  $("#menu, #head_logo, #offer_button, #footer_menu, #footer_logo").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
  
            $('.toAnchor').on('click', function() {
                  $('.navbar-collapse').removeClass('show');
                  $a = $($(this).attr('href'));
                  $('html,body').animate({
                        scrollTop: $a.offset().top - 50
                  }, 500);
                  return false;
            });
      
});
