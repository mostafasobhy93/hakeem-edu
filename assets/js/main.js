$(document).ready(function () {
    'use strict';
    
// sticky header
    // $(window).scroll(function () {
    //     if ($(window).scrollTop() >= 100) {
    //         $('header').addClass('sticky');
    //     } else {
    //         $('header').removeClass('sticky');
    //     }
    // });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    var isRTL = $("html").attr("dir") === "rtl"; 
    
//    Hero Section
    $(".hero-section .hero-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
		rtl: isRTL,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
    });
	
//    Testimonial Slider
    $(".testimonial-section .testimonial-slider").owlCarousel({
        loop: true,
        items: 1,
        margin: 5,
        dots: true,
        nav: false,
        rtl: isRTL,
        active: true,
        smartSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 5000,
    });

//  Hide coupon
    $('.hide-coupon').click(function() {
        $(this).parent('.coupon').remove();
    })


});

