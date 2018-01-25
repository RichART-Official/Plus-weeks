function Timer(){
  var time = 0;

  this.display = function(){
    textSize(18);
    text('Your Time', 10, 30);
    fill(0, 102, 153);
    textSize(50);
    text(time, 10, 70);
  }

  var convert = function(s){
    var min = floor(s /60);
    var sec = s % 60;
    return min + ':' + sec;

  }

  this.timeIt = function(){
    var curTime;
    time = convert(curTime);
  }

  setInterval(this.timeIt, 1000);
}
