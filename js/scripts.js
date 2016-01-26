// business logic
var pingPong = function(input){
var toInput = [];
  for (var i = 1; i <= input; i++){
    if(i % 3 !== 0 && i % 5 !== 0 && i % 15 !== 0){
      toInput.push(i);
    }

    else if (i % 15 === 0){
      toInput.push("pingpong")
    }

    else if (i % 5 === 0){
      toInput.push("pong");
    }

    else if (i % 3 === 0){
      toInput.push("ping");
    }
  };
  return toInput;
};
// user interface logic NOT DONE
$(document).ready(function() {
  $("form").submit(function(event) {
  var inputtedNumber = parseInt($("input#userNumber").val());
  var countTo = pingPong(inputtedNumber);
    $("#countUp").empty()
    countTo.forEach(function(outputted) {
      $("#countUp").append("<li>" + outputted + "</li>");
      event.preventDefault();
    })
  });
});
