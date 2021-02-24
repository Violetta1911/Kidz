$(function(){
    $('.main-slider__inner').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: true,   
        autoplay: true,
         autoplaySpeed: 2000,
         variableWidth: true
    });

    $('.teachers__slider').slick({
        arrows: true,   
        speed: 300,
        slidesToShow: 4,
        slideToScroll: 1,
        responsive: [
            {
              breakpoint: 1300,
              settings: {                
                slidesToShow: 3,
                centerMode: true,
              }
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 670,
              settings: {
               arrows:false,
               slidesToShow: 2,
              }
            },
            {
              breakpoint: 520,
              settings: {
               arrows:true,
               slidesToShow: 1,
              }
            },
            
          ]
    });    

    $('.menu-btn').on('click', function (){
      $('.navigation').slideToggle('')
      });
   
    let mixer = mixitup ('.gallery__box'); 
    
});