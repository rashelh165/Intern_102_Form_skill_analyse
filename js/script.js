/**
 *
 * @name xPress HTML Landing Template
 * @author Themeoo
 * @version 1.0.0
 * @package xPress HTML
 *
 * */

(function ($) {
  ("use strict");

  //*=============menu sticky js =============*//
  var $window = $(window);
  var didScroll,
    lastScrollTop = 0,
    delta = 5,
    $mainNav = $(".sticky-nav"),
    $body = $("body"),
    $mainNavHeight = $mainNav.outerHeight() + 15,
    scrollTop;

  $window.on("scroll", function () {
    didScroll = true;
    scrollTop = $(this).scrollTop();
  });

  setInterval(function () {
    if (didScroll) {
      if (Math.abs(lastScrollTop - scrollTop) <= delta) {
        return;
      }
      if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
        $mainNav
          .removeClass("fadeInDown")
          .addClass("fadeInUp")
          .css("top", -$mainNavHeight);
        $body.removeClass("remove").addClass("add");
      } else {
        if (scrollTop + $(window).height() < $(document).height()) {
          $mainNav
            .removeClass("fadeInUp")
            .addClass("fadeInDown")
            .css("top", 0)
            .addClass("gap");
          $body.removeClass("add").addClass("remove");
        }
      }
      lastScrollTop = scrollTop;
      didScroll = false;
    }
  }, 200);

  if ($(".sticky-nav").length) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll) {
        $(".sticky-nav").addClass("navbar_fixed");
        $(".sticky-nav-doc .body_fixed").addClass("body_navbar_fixed");
      } else {
        $(".sticky-nav").removeClass("navbar_fixed");
        $(".sticky-nav-doc .body_fixed").removeClass("body_navbar_fixed");
      }
    });
  }

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 500) {
        $("body").addClass("test");
      } else {
        $("body").removeClass("test");
      }
    });
  });

  // scrollToTop
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  //Click event to scroll to top
  $(".scrollToTop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  // counter
  if ($(".counter").length) {
    var counter = $(".counter");

    counter.counterUp({
      delay: 30,
      time: 1000,
    });
  }

  // Banner Slider
  const bannerSlider = new Swiper(".themeoo-banner-slider-active", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    on: {
      slideChangeTransitionStart: function () {
        $(".swiper-slide.swiper-slide-active .themeoo-banner-slider-item h2").css("left", "0");
        $(".swiper-slide.swiper-slide-active .themeoo-banner-slider-item span").css("left", "0");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape1").css("bottom", "0");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape2").css("top", "0");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape3").css("bottom", "73px");
      },
      slideChange: function () {
        $(".swiper-slide.swiper-slide-active .themeoo-banner-slider-item h2").css("left", "100%");
        $(".swiper-slide.swiper-slide-active .themeoo-banner-slider-item span").css("left", "100%");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape1").css("bottom", "100%");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape2").css("top", "100%");
        $(".swiper-slide.swiper-slide-active .themeoo-slider-shape.shape3").css("bottom", "100%");
      }
    }
  });


  // Client Slider
  const clientSlider = new Swiper(".themeoo-client-slider-active", {
    slidesPerView: 2,
    spaceBetween: 0,
    loop: true,
    // centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // Project Slider
  const projectSlider = new Swiper(".themeoo-project-slider-active", {
    slidesPerView: 1,
    spaceBetween: 9,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      
      768: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  // Project Slider
  const blogSlider = new Swiper(".themeoo-blog-slider-active", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    // centeredSlides: true,
    navigation: false,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 2,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },

      992: {
        slidesPerView: 3,
      },

      1200: {
        slidesPerView: 3,
      },
    },
  });

  // Testimonial Slider
  const testimonialSlider = new Swiper(".themeoo-testimonial-slider-active", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },

      768: {
        slidesPerView: 2,
      },

      992: {
        slidesPerView: 3,
      },
    },
  });

  // portfolio
  if ($(".themeoo-grid").length) {
    var $grid = $('.themeoo-grid').isotope({
      itemSelector: '.themeoo-grid-item',
      // masonry: {
      //   // columnWidth: 100,
      //   // horizontalOrder: true,
      // }
    });
    // filter items on button click
    $('.themeoo-portfolio-button').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
  
    // change is-checked class on buttons
    $('.themeoo-portfolio-button').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-active').removeClass('is-active');
      $( this ).addClass('is-active');
      });
    });
   }

  // $("select").niceSelect();

  new WOW().init();

  // Tippy JS
   if ($(".tippy-box").length) {    
    tippy('.tippy-box', {
      animation: 'scale',
      arrowType: 'round',
      theme: 'material'
    });
   }
})(jQuery);

  