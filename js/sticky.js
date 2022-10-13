$(function () {
  var $headerSTK = $(".header_sticky");
  var $headerSTK_OST = $headerSTK.offset().top;

  $(window).scroll(function () {
    var $currentSCT = $(this).scrollTop();
    if ($currentSCT > 800) {
      $headerSTK.addClass("on");
    } else {
      $headerSTK.removeClass("on");
    }
  });
});
