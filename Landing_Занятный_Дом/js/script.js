$(function(){
$(window).scroll(function() {
var top = $(document).scrollTop();
if (top < 70) $("#fixmenu").css({top: '0', position: 'relative', });
else $("#fixmenu").css({top: '0', position: 'fixed', width: '100%', transition: '0.3s',});
});
});

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
