$(window).scroll(function(par){

	// first progress bar**************************************************
	
	  $('.after.first.circle').circleProgress({
    value: 0.25,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
    value: 0.1243,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
    value: 0.01,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
    value: 0.25,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
   value: 0.1,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
       value: 0.025,
    thickness: '12',
    size: 195.0,
    animation: {
      duration: 750,
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
