$(function() {
      $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 100) $("#fixmenu").css({
                  top: '0',
                  position: 'relative',
                  zIndex: '50' ,
            });
            else $("#fixmenu").css({
                  top: '0',
                  position: 'fixed',
                  width: '100%',
                  zIndex: '50' ,
                  transition: '0.3s',
            });
      });
});
