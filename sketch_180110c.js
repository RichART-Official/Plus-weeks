var gameHeight = 720;
var gameWidth = 1280;
var sl;

function setup() {
  createCanvas(gameWidth, gameHeight);
  sl = new seaLion();
}

function draw() {
   background(100,100,100);
   surroundings();
   sl.show();
   sl.update(); 
   sl.controls();
}

function surroundings() {
  //Adjustment
  fill(50,50,50);
  noStroke();
  
  //Create floor
  //rect(0, gameHeight - (gameHeight /100), gameWidth, gameHeight /100);
  
  //Create wall
  rect(gameWidth/3, gameHeight - 300, 30, 300);
}

function seaLion() {
  //Size Sealion
  this.size = 35
  //Start position Sealion
  this.x = 300;
  this.y = 300;
  
  this.gravity = .5;
  this.velocity = 0;
  
  //Design Sealion
  this.show = function(){
  fill(255);
  rect( this.x - this.size , this.y - this.size / 2, this.size*2, this.size/3);
  fill(0);
  ellipse(this.x, this.y, this.size, this.size);
  }
  
  //gravity
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;

    if( this.y = height) {
      this.y = height - this.size/2;
      this.velocity = 0;
    }
  }
  //Controls
  this.controls = function() {
    if(this.x <= 0 || this.x >= width) {
      this.x = 1;
    } else {
       if(keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
      }
      
      if(keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }
      
      if(keyIsDown(RIGHT_ARROW)) {
        this.x += 5;
      }
    }
 
    
    
  }
  
}