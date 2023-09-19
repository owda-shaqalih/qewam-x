$(window).on("load", function() {
    $("#preloader").fadeOut();
    AOS.init({
        easing: 'ease-out-back',
        duration: 1000,
        once:true,
    });
});
$(document).ready(function(){
    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

	$("#testimonial_slider").owlCarousel({
        loop:true,
        margin:30,
        items:1,
        responsiveClass:true,
        dots:true,
        nav:false,
        autoplay:false,
    })

    $("#brands_slider").owlCarousel({
        loop:true,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            575:{
                items:3,
            },
            768:{
                items:4,
            },
            992:{
                items:5,
            }

        },
        dots:true,
        nav:false,
        autoplay:false,
    })
})