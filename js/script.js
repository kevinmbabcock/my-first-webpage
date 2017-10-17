$(function() {
  $("button#Light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#Dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});
