//A thing by RichART 2017

var gameHeight = 1080;
var gameWidth = 1920;
var sl;
var wl;
var li;
var bllt;


function setup() {
  createCanvas(gameWidth, gameHeight);
  sl = new seaLion();
  wl = new wall();
  //bllt = new bullet();
  li = new lion();
  var Time = timer();

}

function draw() {
  background(100, 100, 100);

  wl.show();
  //bllt.show();

  sl.show();
  sl.update();
  sl.controls();
  li.show();

  //li.show();

  if (wl.intersect(sl, 0)) {
    sl.x += 0;
    //alert("hi");
  }

}

function timer(){
  var counter = 0;
  var timeleft = 180;

  textSize(40);
  text(timeleft, 30, 50);

  function time(){
    counter++;
    timeleft = timeleft - counter;
  }
  setInterval(time, 1000);
}

function wall() {
  //Position
  this.x = width/3;
  this.y = gameHeight - 300

    //Dimentions
    this.w = 100;
  this.h = 300;

  //Adjustment
  fill(50, 50, 50);
  noStroke();

  //Create floor
  //rect(0, gameHeight - (gameHeight /100), gameWidth, gameHeight /100);
  this.show = function() {
    //Create wall
    fill(0);
    rect(this.x, this.y, this.w, this.h);
  }


  //Detect intersection
  this.intersect = function(other, sensitivity) {
    //BUG: the distance between other en wall doesn't seem accurate, may depend on inaccurate input from other.y; TEMPORARY FIX: a sensitivity parameter that decreases that corrects this error by subtrackting a certain distance from d.
    var d = dist(this.x, 0, other.x, 0);

    //print("this.x: " +this.x+"; this.y: "+this.y+"; other.x: " + other.x + "; other.y: " + other.y);
    //print("current distance: " + d +"; distance: "+ this.w + other.w);

    if (d - sensitivity < this.w + other.w) {
      return true;
    } else {
      return false;
    }
  }
}
function lion() {
  this.x = 1200;
  this.y = 0;

  this.w = 150;
  this.h = this.w;

  this.show = function(){
    //fill(255,0,0);
    //ellipse(this.w, this.y, this.w, this.y);
    fill(255,0,0)
    rotate(0);
    translate(1500, 10)
    ellipse(0, 0, this.w, this.h);
  }
}
function seaLion() {
  //Size Sealion
  this.w = 75;
  this.h = this.w;

  //Start position Sealion
  this.x = width / 5;
  this.y = 0;

  //Rotation gun
  this.rotate = 0;

  //Physics
  this.gravity = .5;
  this.velocity = 0;

  //Design Sealion
  this.show = function() {
    translate(this.x, this.y);

    angleMode(DEGREES);
    rotate(this.rotate);

    fill(255);
    rect( 0, 0, this.w, this.w/3);

    rotate(0);
    fill(0);
    ellipse(0, 0, this.w, this.w);
  }

  //gravity
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if ( this.y = height) {
      this.y = height - this.w/2;
      this.velocity = 0;
    }
  }

  //Controls
  this.controls = function() {
    if (this.x <= 0 || this.x >= width) {
      this.x = 1;
    } else {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -=5;
      }

      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }

      if (keyIsDown(UP_ARROW)) {
        this.rotate += 1;
      }

      if (keyIsDown(DOWN_ARROW)) {
        this.rotate -= 1;
      }
    }
  }
}



//function bullet() {
//  this.show = function() {
//    fill(255);
//    ellipse(0, height, 20, 20);
//  }
//}
