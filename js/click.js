$(function () {
  const langBox_btt = $(".lang_box > button"),
    lang = $(".lang");
  langBox_btt.click(function () {
    lang.addClass("on");
  });
  lang.mouseleave(function () {
    lang.removeClass("on");
  });
  //
  const moveAir_btt = $(".move_airport > button"),
    moveAir_list = $(".move_airport_list"),
    moveAir_list_X = $(".move_airport_list > button");
  moveAir_btt.click(function () {
    moveAir_list.addClass("on");
  });
  moveAir_list.mouseleave(function () {
    moveAir_list.removeClass("on");
  });
  moveAir_list_X.click(function () {
    moveAir_list.removeClass("on");
  });
  //
  const airLocation = $(".airLocation"),
    airLocation_btt = $(".airLocation > button"),
    airSection = $(".airSection"),
    airSection_btt = $(".airSection > button"),
    airLine = $(".airLine"),
    airLine_btt = $(".airLine > button");
  airLocation_btt.click(function () {
    airLocation.find(".ASB_opt").toggle(
      function () {
        $(this).addClass("on");
      },
      function () {
        $(this).removeClass("on");
      }
    );
  });
  airSection_btt.click(function () {
    airSection.find(".ASB_opt").toggle(
      function () {
        $(this).addClass("on");
      },
      function () {
        $(this).removeClass("on");
      }
    );
  });
  airLine_btt.click(function () {
    airLine.find(".ASB_opt").toggle(
      function () {
        $(this).addClass("on");
      },
      function () {
        $(this).removeClass("on");
      }
    );
  });
  //
  const reOption3_btt = $(".re_button"),
    reType = $(".re_type"),
    re_type_end = $(".type_end");
  reOption3_btt.click(function () {
    reType.addClass("on");
  });
  re_type_end.click(function () {
    reType.removeClass("on");
  });
  //
  const ftSite_btt = $(".ft_site button"),
    ftPopUp = $(".ft_pop_up"),
    ftPop_btt = $(".ft_pop_btt");
  ftSite_btt.click(function () {
    ftPopUp.addClass("on");
  });
  ftPop_btt.click(function () {
    ftPopUp.removeClass("on");
  });
});
