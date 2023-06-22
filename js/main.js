(function ($) {
    (function ($) {
        "use strict";
    
    

        var skills = {
            ht: 90,
            cs: 80,
            bo: 95,
            js: 40,
            jq: 60,
            sa: 20
          };
          
          $.each(skills, function(key, value) {
            var skillbar = $("." + key);
          
            skillbar.animate(
              {
                width: value + "%"
              },
              3000,
              function() {
                $(".speech-bubble").fadeIn();
              }
            );
          }); 
    })(jQuery);
    var typed = new Typed('.header_typing', {
		strings: ["Freelancer.", "Web Designer."],
		typeSpeed: 40,
		backSpeed: 40,
		loop: true,
		showCursor: false,
		backDelay: 2000,
		startDelay: 1000,

	});
    
	var typed = new Typed('.about_typing', {
		strings: ["Freelancer.", "Web Designer."],
		typeSpeed: 40,
		backSpeed: 40,
		loop: true,
		showCursor: false,
		backDelay: 2000,
		startDelay: 1000,

	});
    
        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .responsive-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });
        $(window).on('load', function(){
            // Prealoder
            $("#preloader").delay(500).fadeOut("slow");
    
            // Isotope Initialize
            function isotopeInit() {
                $('.project_items').isotope({
                    itemSelector: '.item',
                    masonry: {
                        columnWidth: '.item'
                    }
                });
                $('.project_filter_menu ul li').on('click', function () {
                    $('.project_filter_menu ul li').removeClass('active');
                    $(this).addClass('active');
                    var selector = $(this).attr('data-filter');
                    $('.project_items').isotope({
                        filter: selector
                    });
                    return false;
                });
            }
            isotopeInit();
        });
    
        $(document).ready(function () {
    
            // sticky header
            function sticky_header(){
                var wind = $(window);
                var sticky = $('header');
                wind.on('scroll', function () {
                    var scroll = wind.scrollTop();
                    if (scroll < 100) {
                        sticky.removeClass('sticky');
                    } else {
                        sticky.addClass('sticky');
                    }
                });
            }
            sticky_header();
    
            // Client Slider Initialize
            $('.hero_text_slider').owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplayHoverPause: true,
                nav: false,
                dots: true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
    
            
        });
    
        // all video controller none
        document.ready(function(){        
            $('video').prop('controls', false);
        });

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    
    // WOW active
    new WOW().init();


})(jQuery);
