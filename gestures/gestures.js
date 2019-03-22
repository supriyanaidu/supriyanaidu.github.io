//Global variables
var downMouseX = 0;
var downMouseY = 0;
var numberOfClicks = 0

//records mouse click event and increments number of clicks
$( "#gestureArea" ).click(function(event) {
  numberOfClicks = numberOfClicks + 1;
});

//records mouse move event and resets number of clicks to 0
$( "#gestureArea" ).mousemove(function(event) {
  numberOfClicks = 0;
});

//records mouse down event
$( "#gestureArea" ).mousedown(function(event) {
  downMouseX = event.pageX;
  downMouseY = event.pageY;
  $('#gestureResult').text('Mouse Down!');
});

//records mouse up event and populates appropriate gesture
$( "#gestureArea" ).mouseup(function(event) {
  var upMouseX = event.pageX;
  var upMouseY = event.pageY;
  // var down = upMouseY - downMouseY;
  if(upMouseX < downMouseX){
    $('#gestureResult').text('Swipe Left!');
  }
  else if(upMouseX > downMouseX){
    $('#gestureResult').text('Swipe Right!');
  }
  // else if(upMouseY > downMouseY && down > 10){
  //   $('#gestureResult').text('Swipe Down!');
  // }
  // else if(upMouseY < downMouseY && down < -10){
  //   $('#gestureResult').text('Swipe Up!');
  // }
  else if(numberOfClicks == 0 && upMouseX == downMouseX){
    $('#gestureResult').text('Mouse Up!');
  }

  else if(numberOfClicks == 2 && upMouseX == downMouseX){
    $('#gestureResult').text('Double Click!');
  }
  else if(numberOfClicks == 3 && upMouseX == downMouseX){
    numberOfClicks = 0;
    $('#gestureResult').text('Triple Click!');
  }
});
//
// References:
// https://api.jquery.com/click/
// https://api.jquery.com/mousedown/
// http://api.jquery.com/event.pagex/
// http://api.jquery.com/text/
