$(function () {

  $('.services__slider').slick({
    dots: false,
    slidesToShow: 1,
    arrows: false,
    fade: true,
    // prevArrow: '<button type="button" class="slick-prev slide__arrow arrow__left"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    // nextArrow: '<button type="button" class="slick-prev slide__arrow arrow__right"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>'
  });
  
  $('.reviews__slider').slick({
    dots: false,
    slidesToShow: 1,
    arrows: true,
    fade: true,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev slide__arrow reviews__arrow-left"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev slide__arrow reviews__arrow-right"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  $('.news__slider').slick({
    dots: false,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slide__arrow news__arrow-left"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev slide__arrow news__arrow-right"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          fade: true,
          arrows: false,
          dots: true,
        }
      },
    ]
  });


  // Slider 
  $.fn.BeerSlider = function( options ) {
    options = options || {};
    return this.each( function () {
      new BeerSlider( this, options );
    });
  };
  $( ".beer-slider" ).each( function( index, el ) {
    $( el ).BeerSlider( {start: $( el ).data( "start" ) } )
  });

  
  // Fixed header
  let header = $("#header");
  let intro = $("#intro");
  // let introH = intro.height();       <----/* Высота элемента без падингов */
  let introH = intro.innerHeight();          /* Высота элемента с падингами */
  let scrollPos = $(window).scrollTop();     /* Позиция скролла от самого верха */
  checkScroll(scrollPos, introH);
  let nav = $("#nav")

  $(window).on("scroll resize", function () {         /* Выполнение действий при скролле, (load) загрузке изменении размера страницы */
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();                    /* Обновить переменную на текущую позицию скролла */
    checkScroll(scrollPos, introH);

  });

  function checkScroll(scrollPos, introH) {
    if (scrollPos > introH) {                           /* Если высота скролла больше чем высота introH, то добавляется класс "fixed", если высота нет то класс убирается */
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smooth scroll
  $("[data-scroll").on("click", function (event) {              /* Event event.preventDefault - отменяет стандратное поведение ссылки при клике  */
    event.preventDefault();

    let elementID = $(this).data("scroll");                   /* Получить ID блока по которому кликнули */
    let elementOffset = $(elementID).offset().top;            /* Получить отступ от верха страницы  */

    nav.removeClass("active"),
      $(".ham").toggleClass("active"),
      $(".header").toggleClass("show")

    // console.log(elementOffset);

    $("html, body").animate({                                 /* При клике плавно скролит до элемента по которому кликнули */
      scrollTop: elementOffset - 180                           /* - 50px  */
    }, 500);                                                /* Скорость прокрутки где 1000 - 1 секунда */
  });

  
  

  $('.ham').on('click', function () {
    $('.nav').toggleClass('active')
  });


});
