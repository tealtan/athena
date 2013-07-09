$("#screen-width").html(screen.width);
$("#screen-height").html(screen.height);

$("#browser-width").html($(window).width());
$("#browser-height").html($(window).height());

$(window).resize(function() {
  $("#screen-width").html(screen.width);
  $("#screen-height").html(screen.height);

  $("#browser-width").html($(window).width());
  $("#browser-height").html($(window).height());
});