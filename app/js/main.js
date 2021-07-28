$(function () {
  var mixer = mixitup(".portfolio__content");

  $(".header__burger").click(function (event) {
    $(".header__burger, .menu, .header__top").toggleClass("active");
    $("body").toggleClass("lock"); // remove scroll when burger menu is active
  });

  $(".menu").click(function () {
    $(".header__burger, .menu, .header__top").removeClass("active");
    $("body").removeClass("lock"); // close burger menu after click
  });

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
  });
});
