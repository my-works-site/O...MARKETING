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

  $(".menu a, .go-top, .footer__logo").on("click", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $("body,html").animate({ scrollTop: top }, 1500);
  });

  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 770,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
