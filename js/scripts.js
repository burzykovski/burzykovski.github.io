$(document).ready(function() {
  $(window).scroll(function() {
    $('.slideanim').each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 800) {
        $(this).addClass('slide');
      }
    });
  });

  $('.navbar-collapse a').click(function(e) {
    if (window.innerWidth < 768) {
      $('.navbar-collapse').collapse('toggle');
    }
  });
});
