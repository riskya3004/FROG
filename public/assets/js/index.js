const myCarouselElement = document.querySelector('#carouselExample')

const Carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: false
});
if(window.matchMedia("(min-width:576px)").matches){
    var carousel = $('.recommendDiv .carousel-inner')[0].scrollWidth;
    var cardWidth = $('.recommendDiv .carousel-item').width()*1.017;

    var scrollPosition = 0;

    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carousel-(cardWidth*5))){
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.recommendDiv .carousel-inner').animate({scrollLeft: scrollPosition}, 500);
        }

    });

    $('.carousel-control-prev').on('click', function(){
        if(scrollPosition > 0){
            console.log('prev');
            scrollPosition = scrollPosition - cardWidth;
            $('.recommendDiv .carousel-inner').animate({scrollLeft: scrollPosition}, 500);
        }
    });
}else{
    $(myCarouselElement).addClass('slide2');
}

// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        center: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        },
    });
});
