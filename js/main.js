$(function() {
      $(window).scroll(function() {
            var top = $(document).scrollTop();
            if (top < 100) $("#fixmenu").css({
                  top: '0',
                  position: 'relative',
                  zIndex: '10000' ,
            });
            else $("#fixmenu").css({
                  top: '0',
                  position: 'fixed',
                  width: '100%',
                  zIndex: '10000' ,
                  transition: '0.3s',
            });
      });
});
