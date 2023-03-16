$(document).ready(function () {
  let arrow = $(".expandable");
  $(".last-particle_header").click(function () {
    arrow.toggleClass("hidden");
  });

  $(".revolution").click(function () {
    $(".modal2-canvas").toggleClass("hidden");
  });
  $(".bret").click(function () {
    $(".modal-canvas").toggleClass("hidden");
  });
  $(".modal-close").click(function () {
    $(".modal-canvas").remove();
  });
  $(".modal-close").click(function () {
    $(".modal2-canvas").remove();
  });
  $(".btnchik").click(function () {
    $("#inputText").html("ghbdtn");
  });
  $(".Acc").click(function () {
    $(".accn").css("display", "block");
  });

  // image - strelok
});
