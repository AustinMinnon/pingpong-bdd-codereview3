// business logic
var pingPong = function(int){
var myArray = [];
  for (var i = 1; i <= int; i++){
    if(i % 3 !== 0 && i % 5 !== 0 && i % 15 !== 0){
      myArray.push(i);
    }
    else if (i % 15 === 0){
      myArray.push("pingpong")
    }
    else if (i % 5 === 0){
      myArray.push("pong");
    }
    else if (i % 3 === 0){
      myArray.push("ping");
    }
  };
    return myArray;
};
// user interface logic NOT DONE!!!!!!!!!!!!!!!!!! :'(
$(document).ready(function(){
  $("#input").submit(function(event) {
    var userNumber = $("input#userInput").val();
    var output = pingPong(userNumber)
    output.forEach(outputs){
      $("#result").append("<li>" + outputs + "</li:>");
      }
    }
      event.preventDefault();
  });
});
