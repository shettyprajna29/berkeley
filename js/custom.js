$(document).ready(function() {
    var winH = $(window).height();
    var winW = $(window).width();

    //solution sec js starts
    $('.solution-slide-second').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.solution-slide-first',
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    });
    $('.solution-slide-first').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.solution-slide-second',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    });
    // solution sec js ends

    //faq js starts
    $('.accordian li:first-child .accordian-container').css('display', 'block');
    $('.accordian h4').on('click', function(event) {
        event.preventDefault();
        //console.log('hi');
        $('.accordian-container').slideUp();


        $('.accordian h4 span').addClass('down-arrow').removeClass('up-arrow');
        if ($(this).next('.accordian-container').is(':hidden') == true) {
            $(this).next('.accordian-container').slideDown();
            $(this).find('span').removeClass('down-arrow').addClass('up-arrow');
        }

    });

    //faq js ends
    $('.research_slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    $('.develop_crousel').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 20000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1008,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    $('.tabs a ').on('click', function(e) {
        e.preventDefault();
        var tab_n = $(this).attr('href');
        $(tab_n).show().siblings().hide();
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });
    if (winW < 767) {
        $('.drop_tab_div .drop_span').on('click', function(e) {
            var thi_wi = $(this).outerWidth();
            if ($(this).hasClass('open_drop')) {
                $(this).removeClass('open_drop');
                $('.drop_ul').slideUp();
                $(this).next('.drop_ul').slideUp();
            } else {
                $('.drop_tab_div .drop_span').removeClass('open_drop');
                $(this).addClass('open_drop');
                $('.drop_ul').slideUp();
                $(this).next('ul').css('width', thi_wi).slideToggle();
            }

        });
        $('.drop_tab_div ul li').on('click', function(e) {
            $(this).parents('.drop_tab_div').find('.drop_span').removeClass('open_drop');
            $(this).parents('.drop_ul').slideUp();
            var this_text = $(this).text();
            $(this).parents('.drop_tab_div').find('.drop_span').text('');
            $(this).parents('.drop_tab_div').find('.drop_span').text(this_text);
        });


    }
    //aos initialisation
    AOS.init();
    //aos initialisation
    // tweenmax starts
    // banner
    // TweenMax.staggerFrom($('.banner-img'), 2, {
    // 	scale: 0,
    // 	opacity: 0,
    // 	ease: Elastic.easeOut.config(0, 0)
    // }, 0.1);
    // TweenMax.staggerTo($('.banner-img'), 2, {
    // 	scale: 1,
    // 	opacity: 1,
    // 	ease: Elastic.easeOut.config(1, 0.75)
    // }, 0.1);
    // TweenMax.staggerFrom($('.banner-img'), 2, {
    // 	y: -50,
    // 	opacity: 0,
    // 	ease: Back.easeOut
    // }, 1.00);
    //banner
    //menu
    TweenMax.staggerFrom($('.navbar-nav li'), 2, {
        y: -50,
        opacity: 0,
        ease: Back.easeOut
    }, .5);
    //menu
    var controller = new ScrollMagic.Controller({
        addIndicators: false
    });

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.future-con',
        duration: $('.future-con').outerHeight(),
        reverse: false
    });

    scene1.on("enter", function(event) {
        console.log("Scene entered.");
        TweenMax.staggerFromTo($('.future-con'), 2, {
            y: -50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            ease: Back.easeOut
        }, .5);
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.solution-slide-first',
        duration: $('.solution-slide-first').outerHeight(),
        reverse: false
    });
    scene2.on("enter", function(event) {
        console.log("Scene entered2.");
        var tl = new TimelineMax();
        tl.staggerFromTo($('.solution-slide-first'), 2, {
            x: -50,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            ease: Back.easeOut
        }, .5).fromTo($('footer'), .5, {
            opacity: 0,
        }, {
            opacity: 1,
            ease: Linear.easeOut
        });
    });
    var scene3 = new ScrollMagic.Scene({
        triggerElement: 'footer',
        duration: $('footer').outerHeight(),
        reverse: false,
    });
    scene3.on("enter", function(event) {
        console.log("Scene entered3.");

    });


    controller.addScene([scene1, scene2, scene3])
});
$(window).on("load", function() {
    TweenMax.set(".future-con, .solution-slide-first", {
        opacity: 0
    });
});