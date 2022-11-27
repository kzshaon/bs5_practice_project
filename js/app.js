$(document).ready(function(){
    // HERO SLIDER 
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: false,
        items: 1,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsive:{
            0:{
               nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    // PROJECT SLIDER //
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        margin: 24,
        responsive:{
            0:{
              items: 2,
            },
            768: {
              items: 3, 
            },
            1140: {
                items: 2,
                center: true,
            }
        }
    })
});