$(function () {
  var firstmenu = $(".gnb > li"),
    header_top = $(".header_top"),
    header_nav = $(".header_nav"),
    header_nav_Height = header_nav.height();

  firstmenu.mouseenter(function () {
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").height();
    header_nav
      .stop()
      .animate({ height: submenuHeight + header_nav_Height + 41 }, 0)
      .addClass("gnbOn");
    header_top.addClass("gnbOn");
  });

  firstmenu.mouseleave(function () {
    $(this).find("ul").hide();
    header_nav
      .stop()
      .animate({ height: header_nav_Height }, 0)
      .removeClass("gnbOn");
    header_top.removeClass("gnbOn");
  });
});
