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
    
    //    Hero Section
    var isRTL = $("html").attr("dir") === "rtl"; 
    var $heroSection = $('.hero-section');
    
    $(".hero-section .hero-slides").owlCarousel({
        loop: false,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
		rtl: isRTL,
        active: true,
        smartSpeed: 1000,
        // autoplay: true,
        // autoplayTimeout: 5000,

        onChanged: function(event) {  
            // Get the current item index  
            var currentIndex = event.item.index;  

            // Find the corresponding background image from the current item  
            var newBgImage = $(event.target).find('.hero-content').eq(currentIndex).data('bg');  

            // Change the background image of the hero section  
            $heroSection.css('background-image', 'url(' + newBgImage + ')');  
        }, 
    });
    // Initial background image set from the first item  
    var initialBgImage = $('.owl-carousel .hero-content').eq(0).data('bg');  
    $heroSection.css('background-image', 'url(' + initialBgImage + ')');  
	
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

//    blog slider
    $(".blog-slides").owlCarousel({
        loop: false,
        items: 3,
        dots: false,
        nav: false,
        active: true,
        margin: 20,
        rtl: isRTL,
        autoplay: false,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".blog-slider1 .carousel-arrows .next").on("click", function() {
        $(".blog-slides").trigger("next.owl.carousel");
    });
    $(".blog-slider1 .carousel-arrows .prev").on("click", function() {
        $(".blog-slides").trigger("prev.owl.carousel");
    });

//    blog slider
    $(".blog-slides2").owlCarousel({
        loop: false,
        items: 3,
        dots: false,
        nav: false,
        active: true,
        margin: 20,
        rtl: isRTL,
        autoplay: false,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".blog-slider2 .carousel-arrows .next").on("click", function() {
        $(".blog-slides2").trigger("next.owl.carousel");
    });
    $(".blog-slider2 .carousel-arrows .prev").on("click", function() {
        $(".blog-slides2").trigger("prev.owl.carousel");
    });

//  Hide coupon
    $('.hide-coupon').click(function() {
        $(this).parent('.coupon').remove();
    })


});

