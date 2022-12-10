$(document).ready(function () {
  $('#slider-home .owl-carousel').owlCarousel({
    stagePadding: 280,
    loop: true,
    margin: 20,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        nav: false,
      },
      480: {
        items: 1,
        stagePadding: 60,
        nav: true,
      },
      667: {
        items: 1,
        stagePadding: 80,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
      },
    },
  })
})
