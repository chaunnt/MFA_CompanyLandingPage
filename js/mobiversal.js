$(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btn_top').fadeIn(300);
            $('header, nav').addClass('active');
        } else {
            $('#btn_top').fadeOut(300);
            $('header, nav').removeClass('active');
        }
    });

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    if ($(window).width() < 769) {
        // MENU MOBILE CLICK
        $(".btn_side").click(function() {
            $(this).toggleClass('open');
            $("nav ul").toggleClass("active");
            return false;
        });

        if ($(".app_demo_img").length) {
            $('.app_demo_img li a').click(function() {
                $('body').addClass('active')
            });
            $('#apps_demo .lb-close').click(function() {
                $('body').removeClass('active')
            });
        }
    }

    $('.service_link ul li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.service_link ul li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });



    AOS.init({
        duration: 1000,
        once: true,
        disable: 'mobile',
    });


    if ($('.work_img_app').length) {
        $('.work_img_app ul').slick({
            dots: false,
            arrows: false,
            slidesToShow: 4,
            speed: 500,
            pauseOnHover: false,
            pauseOnFocuse: false,
            margin: 0,
            autoplay: false,
            autoplaySpeed: 5000,
            infinite: true,
            responsive: [{
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2,
                        centerMode:true,
                        centerPadding: '0px',
                        variableWidth: true,

                    }
                }
            ]
        });
    }
});

$(window).bind('load', function() {
    "use strict";
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 768) {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                }
            }
            return false;
        });
    });
});