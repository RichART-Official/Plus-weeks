function Timer(){
  var currentTime = 0;
  var time = 0;
  var startTime = 0;

  this.display = function(){
    textSize(18);
    text('Your Time', 20, 30);
    fill(255);
    textSize(72);
    text(time, 20, 100);
  }

  var convert = function(s){
    var min = floor(s /60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);

  }

  this.timeIt = function(){
     currentTime = floor((millis() - startTime) / 1000);
     time = convert(currentTime)
  }

  setInterval(this.timeIt, 1000);
}
