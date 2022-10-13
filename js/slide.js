$(function () {
  var slideShow = $(".banner_slide");
  var imagesSrc = ["Img_banner1.png", "Img_banner2.png", "Img_banner3.png"];
  var slideBtt = $(".banner_slide_btt > ul > li");

  $.each(imagesSrc, function (a, o) {
    var image = $("<img>");
    image.attr("src", "img/" + o);
    console.log(a, o);
    slideShow.append(image);
  });
  slideShow.find("img").eq(0).addClass("current");

  var j = 0;
  setInterval(function () {
    slideShow
      .find("img")
      .eq(j % imagesSrc.length)
      .removeClass("current");
    slideShow
      .find("img")
      .eq((j + 1) % imagesSrc.length)
      .addClass("current");
    j++;
  }, 8000);
});
