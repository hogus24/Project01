$(function () {
  $("#go_day").datepicker({
    showAnim: "fadeIn",
    dateFormat: "yy-mm-dd",
    showMonthAfterYear: true,
    changeYear: true,
    changeMonth: true,
    yearSuffix: "년",
    buttonImage: "img/Icon_date.png",
    buttonText: "선택",
    showOn: "both",
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "ㄹ8월", "9월", "10월", "11월", "12월"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
  });

  $("#come_day").datepicker({
    showAnim: "fadeIn",
    dateFormat: "yy-mm-dd",
    showMonthAfterYear: true,
    changeYear: true,
    changeMonth: true,
    yearSuffix: "년",
    buttonImage: "img/Icon_date.png",
    buttonText: "선택",
    showOn: "both",
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "ㄹ8월", "9월", "10월", "11월", "12월"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
  });
});
