$(function () {
  var firstmenu = $(".gnb > li"),
    header_bottom = $(".header_nav"),
    header_bottom_Height = header_bottom.height(),
    header_top = $(".header_top");

  firstmenu.mouseenter(function () {
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").height();
    header_bottom
      .stop()
      .animate({ height: submenuHeight + header_bottom_Height + 41 },0)
      .addClass("gnbOn");
    header_top.addClass("gnbOn");
  });

  firstmenu.mouseleave(function () {
    header_bottom
      .stop()
      .animate({ height: header_bottom_Height },0)
      .removeClass("gnbOn");
    $(this).find("ul").hide();
    header_top.removeClass("gnbOn");
  });
});
