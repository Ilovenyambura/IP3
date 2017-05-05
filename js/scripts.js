$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var number = parseInt($("input#number").val());

//end of user interface

    for (m = 1;m <=number; m++)
       if ((m % 3 === 0) && (m % 5 === 0)) {
          $("ul").append("<li>pingpong</li>");
        } else if (m % 3 === 0) {
          $("ul").append("<li>ping</li>");
        } else if (m % 5 === 0) {
          $("ul").append("<li>pong</li>");
        } else {
          $("ul").append("<li>" + m + "</li>");
        }
  });
});
