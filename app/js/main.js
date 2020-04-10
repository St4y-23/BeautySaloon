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
    prevArrow: '<button type="button" class="slick-prev slide__arrow reviews__arrow-left"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev slide__arrow reviews__arrow-right"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>'
  });

  $('.news__slider').slick({
    dots: false,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slide__arrow news__arrow-left"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-prev slide__arrow news__arrow-right"><svg class="arrow__icon"><use xlink:href="#arrow"></use></svg></button>'
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

});
