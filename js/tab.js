var search_tab = $(".air_search"),
  search_select = search_tab.find(".air_search_select > button"),
  search_Content = search_tab.find(".air_search_box");

search_select.each(function () {
  var tg = $(this);
  var tgAnc = tg.attr("div");
  tg.click(function () {
    search_select.removeClass();
    tg.addClass("on");
    search_Content.hide();
    $(tgAnc).show();
  });
});

// < 웹 브라우저 오픈시 바로 보이는 패널 설정 >
search_Content.eq(0).show();
