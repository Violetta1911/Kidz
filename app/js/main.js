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
        slideToScroll: 1
    });

    window.onload = function() {
        var drawingCanvas = document.getElementById('smile');
        if(drawingCanvas && drawingCanvas.getContext) {
         var context = drawingCanvas.getContext('2d');
         // Рисуем окружность 
         context.strokeStyle = "#000";
         context.fillStyle = "#fc0";
         context.beginPath();
         context.arc(50,50,25,0,Math.PI*2,true);
         context.closePath();
         context.stroke();
         context.fill();
         // Рисуем левый глаз 
         context.fillStyle = "#fff";
         context.beginPath();
         context.arc(42,45,4,0,Math.PI*2,true);
         context.closePath();
         context.stroke();
         context.fill();
         // Рисуем правый глаз 
         context.beginPath();
         context.arc(58,45,4,0,Math.PI*2,true);
         context.closePath();
         context.stroke();
         context.fill();
         // Рисуем рот
         context.beginPath();
         context.moveTo(30,58);
         context.quadraticCurveTo(50,65,65,58);
         context.quadraticCurveTo(50,75,35,58); 
         context.closePath();
         context.stroke();
         context.fill();
        }
       }
   
    let mixer = mixitup ('.gallery__box'); 
    
});