$(function () {
  var headerAll = $("#header"),
    headerTop = $(".header_top"),
    headerNav = $(".header_nav"),
    headerNav_Height = headerNav.height(),
    firstmenu = $(".gnb > li");

  firstmenu.mouseenter(function () {
    $(this).find("ul").show();
    var submenuHeight = $(this).find("ul").height();
    headerNav
      .stop()
      .animate({ height: submenuHeight + headerNav_Height + 41 }, 0)
      .addClass("gnbOn");
    headerTop.addClass("gnbOn");
  });

  firstmenu.mouseleave(function () {
    $(this).find("ul").hide();
    headerNav
      .stop()
      .animate({ height: headerNav_Height }, 0)
      .removeClass("gnbOn");
    headerTop.removeClass("gnbOn");
  });
});
