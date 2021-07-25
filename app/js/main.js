$(function () {
  var mixer = mixitup(".portfolio__content");

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
  });
});
