function Timer(){
  var time = "Time is relative"
  this.display = function(){
    textSize(18);
    text('Your Time', 10, 30);
    fill(0, 102, 153);
    textSize(50);
    text(time, 10, 70);
  }
}
