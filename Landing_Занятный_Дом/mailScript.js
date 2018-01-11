$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(document).ready(function(){
			$('.btn').click(function () {
				$('.btn').addClass('click');
				});
			});
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

function postOrder1() {
      var el1 = document.createElement('div'),
            text1 = document.createTextNode('Спасибо! Данные отправлены.'),
            getPostOrder1 = document.getElementById('postOrder1');
      el1.appendChild(text1);
      getPostOrder1.appendChild(el1);

};


function postOrder2() {
      var el2 = document.createElement('div'),
            text2 = document.createTextNode('Спасибо! Данные отправлены.'),
            getPostOrder2 = document.getElementById('postOrder2');
      el2.appendChild(text2);
      getPostOrder2.appendChild(el2);
};


function postOrder3() {
      var el3 = document.createElement('div'),
            text3 = document.createTextNode('Спасибо! Данные отправлены.'),
            getPostOrder3 = document.getElementById('postOrder3');
      el3.appendChild(text3);
      getPostOrder3.appendChild(el3);
};


function postOrder4() {
      var el4 = document.createElement('div'),
            text4 = document.createTextNode('Спасибо! Данные отправлены.'),
            getPostOrder4 = document.getElementById('postOrder4');
      el4.appendChild(text4);
      getPostOrder4.appendChild(el4);
};


function postOrder5() {
      var el5 = document.createElement('div'),
            text5 = document.createTextNode('Спасибо! Данные отправлены.'),
            getPostOrder5 = document.getElementById('postOrder5');
      el5.appendChild(text5);
      getPostOrder5.appendChild(el5);
};
