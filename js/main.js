$(function() {
    'use strict';

    /* =======================================
             single Page Nav
    =======================================*/
    // Prevent console.log from generating errors in IE for the purposes of the demo
    if (!window.console) console = {
        log: function() {}
    };
    // Single Page Nav
    $('.single-page-nav').singlePageNav({
        offset: $('.single-page-nav').outerHeight(),
        filter: ':not(.external)',
        updateHash: true,
        beforeStart: function() {
            console.log('begin scrolling');
        },
        onComplete: function() {
            console.log('done scrolling');
        }
    });
	

    /*=======================================
         Navigation fix to top           
    ======================================= */
    var navigation = $('.header').offset().top + 10;
    $(document).scroll(function() {
        if ($(this).scrollTop() > navigation) {
            $('nav').addClass('navbar-fixed-top');
            $('nav').css({
                'z-index': '9999999999'
            });
        } else {
            $('nav').removeClass('navbar-fixed-top');
            $('nav').css({
                'z-index': '0'
            });
        }
    });
	
    /*=======================================
         PRELOADER                     
    ======================================= */
    $(window).load(function() {
        $('#preloader').fadeOut('slow', function() {  
            $(this).remove();
        });
    });
	
    /* =======================================
        Testimonial Section 
    =======================================*/
    $("#testimonial").owlCarousel({
        autoPlay: 6000, //Set AutoPlay to 6 seconds
        items: 1, //Set Testimonial items
        loop: true,
        margin: 10,
        singleItem: true,
        touchDrag: true,
        mouseDrag: true,
        pagination: true,
        nav: true,
        dots: true,
    });
	
    /* =======================================
        Scroll Top
    =======================================*/
    $(".foot-abt").on('click', function() {
        $('html').animate({
            'scrollTop': '0'
        }, 4000);  //Set AutoPlay to 4 seconds
        return false;
    });
 
	
    /*========================================
    		WOW ANIMATION
    ======================================= */
    var wow = new WOW({
        mobile: false
    });
    wow.init();
	
	
    /* =======================================
           Gallery carousel
    =======================================*/
    $('#myCarousel').carousel({
        interval: 5000  //Set Interval to 5 seconds
    });

});