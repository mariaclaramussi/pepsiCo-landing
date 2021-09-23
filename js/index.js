$(".flip-card").on("click", function () {
  $(this).toggleClass("flipped");
  $(this).toggleClass("yellow");
  $(this).toggleClass("blue");
});

$(".owl-carousel").owlCarousel({
  margin: 10,
  loop: false,
  nav: false,
  items: 1,
  stagePadding: 70,
});
