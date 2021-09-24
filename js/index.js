$( document ).ready(function() {
  $(".flip-card").on("click", function () {
    $(this).toggleClass("flipped");
    $(this).toggleClass("yellow");
    $(this).toggleClass("blue");
  });

  $(".container-cards .owl-carousel").owlCarousel({
    margin: 10,
    loop: false,
    nav: false,
    items: 1,
    stagePadding: 70,
  });
  
  $(".owl-carousel.carousel-speach").owlCarousel({
    loop: false,
    nav: false,
    items: 1,
    dots: true,
  });

  // function toggleSpeach() {
  //   $(".speach-board").toggleClass("hide");
  //   window.setTimeout(toggleSpeach, 20000);
  // }

  // toggleSpeach()
})