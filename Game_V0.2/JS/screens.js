// console.log('screens.js works!');

function init(){
  status = "init";
  push()
  var x = 0;
  var y = 0;
  x = 0;
  y = 0;
  image(img[6], x,y,width, height)
  pop();
    //console.log("key typed");
    if(keyCode === 69){
      //console.log("E typed");
      status = "play";
    }
}

function killed(){
  if(alert("Against all odds, you killed yourself")){
    //redraw();
  }
}

function win(){
  if(alert("Against all odds, you killed yourself")){
    redraw();
  }
}
