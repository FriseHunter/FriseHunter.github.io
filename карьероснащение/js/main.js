$(function() {
      $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 100) $("#fixmenu").css({
                  top: '0',
                  boxShadow: '0 4px 9px 0 rgba(0, 0, 0, 0.15)',
                  position: 'relative',
                  zIndex: '50',
            });
            else $("#fixmenu").css({
                  top: '0',

                  position: 'fixed',
                  width: '100%',
                  zIndex: '50',
                  transition: '0.3s',
            });
      });
});

function dBlock(e) {
      e = e || window.event;
      var src = e.target || e.srcElement;
      el = src.parentNode.parentNode.getElementsByClassName('txtMainNews');
      if (el[0].style.display == "block") {
            el[0].style.display = 'none';
      } else {
            el[0].style.display = 'block';
      }
}
