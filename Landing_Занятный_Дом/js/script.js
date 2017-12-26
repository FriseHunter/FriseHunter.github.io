$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 70) $("#fixmenu").css({top: '0', position: 'relative', });
else $("#fixmenu").css({top: '0', position: 'fixed', width: '100%', transition: '0.3s',});
});
});
