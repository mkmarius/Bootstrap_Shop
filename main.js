$(".slider").on("slid.bs.carousel", function(e) {
  $(".slide-number").html("Slide #" + e.from);
});
