//STATUS
//0 = start screen, 1 = active, 2 = won, 3 = dead
var status;

// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Vector = Matter.Vector;

// create an engine
var engine = Engine.create();

//Constructor function aliases
var TheGround, TheWall, TheSeaLion, TheBullet, TheTimer;
var TheLions = [];
var TheBullets = [];

//Physics-Bodies
var ground, seaLion, wall, lion, bullet;

//Sprites
var wll, bg, sl, slw, bl;

//Sprite groups
//NOTE: can we make the Sprite groups & constructor function arrays into one?
var ammo, targets, screens;

//Assets
var img = [];
var walkcycles = [];


function preload(){
  img[0] = loadImage("img/bg.png");
  img[1] = loadImage("img/wll.png");
  //img[2] = loadImage("img/Lion/test00000.png");
  img[3] = loadImage("img/Sea_Lion/SL0001.png");
  img[4] = loadImage("img/Sea_Lion/SL0002.png");
  img[5] = loadImage("img/Bullet/B0001.png");
  img[6] = loadImage('img/Start_Screen/start_screen.png')
  //walkcycles[0] = loadAnimation('img/Lion/Untitled00000.png', 'img/Lion/Untitled00009.png');
  walkcycles[0] = loadAnimation('img/Lion/lionwalkin00000.png', 'img/Lion/lionwalkin00009.png');
}

function setup() {
  //Create canvas
  // createCanvas((windowHeight/9)*16 , windowHeight );
  createCanvas(1920 , 1080 );
  //Create Spirte groups
  ammo = new Group();
  targets = new Group();
  screens = new Group();

  //Declare constructor functions
  TheGround = new Ground();
  TheTimer = new Timer();
  TheSeaLion = new SeaLion(width/6, 100, 100, 100);
  for(i = 0; i <=4; i++){
    TheLions.push( new Lion(random((width/2.5)*1.2, width), height/2, 100, 100));
  }
  for (i=0; i < TheLions.length; i++){
    TheLions[i].create();
  }
  TheWall = new Wall();
  TheSeaLion.create();

  //Run Physics engine
  Engine.run(engine);

}

// function windowResized() {
//   resizeCanvas((windowHeight/9)*16 , windowHeight);
// }

function draw() {
  var fps = 30;

  frameRate(fps);
  background(255, 0,0);
  // if(init() === "play"){
  //   start();
  // }
  start();
}

function keyPressed(){
  if (keyCode === 32){
  fire();
  for (i=0; i < TheBullets.length; i++){
    TheBullets[i].create();
  }
  }
}

function start(){
  //BACKGROUND
  background(img[0]);
  //ASSETS
  TheSeaLion.display(width /4, 50, 100, 100);
  TheSeaLion.controls();
  TheGround.display();
  TheTimer.display();

  for (i=0; i < TheBullets.length; i++){
    TheBullets[i].display();
  }

  //console.log(TheLions.length);
  for (i=0; i < TheLions.length; i++){
    TheLions[i].display();
  }
  TheWall.display();

  drawSprites();

}
