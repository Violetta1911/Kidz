$(function(){
    $('.main-slider__inner').slick({
        arrows: true,   
        speed: 300,
        centerMode: true,
      variableWidth: true
    });

    $('.teachers__slider').slick({
        arrows: true,   
        speed: 300,
        slidesToShow: 4,
        slideToScroll: 1
    });
   
    let mixer = mixitup ('.gallery__box'); 
    
});