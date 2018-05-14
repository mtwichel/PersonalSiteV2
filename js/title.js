$( document ).ready(function() {
  if($(window).width() < 1095){
    console.log("Small");
    $("#mainTitle").text("Welcome to Marcus\nTwichel\n.com");
    $(".display-1").css("font-size", "4rem");
    $(".display-4").css("font-size", "2rem");
    $(".nav-link").css("font-size", "1.3em");
  }
});
