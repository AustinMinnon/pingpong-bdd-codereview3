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
// user interface logic
