// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

//Elements
var engine;
var world;

function preload(){
  img[0] = loadImage("img/bg.jpg");
  img[1] = loadImage("img/wll.jpeg");
  img[2] = loadImage("img/Sea_Lion/SL0001.png");
}


//Bodies
var box1;

//Sprites & Assets
var wll, bg, sl;
var seaLion;
var img = [];


function setup() {
  
  createCanvas(1920 , 1080);
  seaLion = new SeaLion();
  seaLion.display();
  
  //Create world and engine
  engine = Engine.create();
  world = engine.world;
  
  //Add bodies here
  box1 = Bodies.rectangle(200, 200, 100, 100);
  
  // run the engine
  Engine.run(engine);
  
  // add all of the bodies to the world
  World.add(engine.world, box1);
  
} 

function draw() {
  //BACKGROUND
  background(250);
  
  //ASSETS
  backdrop();
  wall();
  
  //CHARACTERS
  seaLion.display();
  
  //DEBUGGING
  wll.debug = mouseIsPressed;
  bg.debug = mouseIsPressed;
  sl.display.debug = mouseIsPressed;
  
  
  //DRAW ALL SPRITES
  drawSprites();
  console.log(box1);
  rect(box1.position.x, box1.position.y, 80,80);
  sl.display(box1.position.y);
}

function backdrop(){
  var x = width /2;
  var y = height /2;
  bg = createSprite(x,y);
  bg.shapeColor = color(0);
  bg.addImage('BG_CONT', img[0]);
}

function wall(){
  var wllHeight = (height / 3.5)*2;
  var wllWidth = 200;
  wll = createSprite(width/3 , height - (wllHeight/2), 30 , wllHeight)
  wll.addImage('WLL_CONT', img[1]);
}

  function SeaLion() {
    var x = 200;
    var y = y;
    
    this.display = function(y){
      sl = createSprite(x, y);
      sl.shapeColor = color(0);
      sl.addImage('SL_CONT', img[2]);
      sl.draw(x, y);
  }
} 