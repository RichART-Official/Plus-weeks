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

//Physics-Vectors
//var vSeaLion;
//Sprites
var wll, bg, sl, slw, bl;

//Assets
var img = [];

function preload(){
  img[0] = loadImage("img/bg.jpg");
  img[1] = loadImage("img/wll.jpeg");
  img[2] = loadImage("img/Sea_Lion/SL0001.png");
  img[3] = loadImage("img/Lion/L0001.png");
  img[4] = loadImage("img/Sea_Lion_weapon/SLW0001.png");
  img[5] = loadImage("img/Sea_Lion/SL0002.png");
  img[6] = loadImage("img/Bullet/B0001.png");
}

function setup() {

  createCanvas(1920 , 1200);
  //Declare constructor functions
  TheGround = new Ground();
  TheTimer = new Timer();
  TheSeaLion = new SeaLion(width/6, 100, 100, 100);

  for(i = 0; i <=4; i++){
    TheLions.push( new Lion(random((width/2.5)*1.2, width), 300, 100, 100));
  }
  TheWall = new Wall();
  for (i=0; i < TheLions.length; i++){
    TheLions[i].create();
  }
  TheSeaLion.create();
  Engine.run(engine);

}

function draw() {
  //BACKGROUND
  background(img[0]);
  //ASSETS
  TheSeaLion.display(width /4, 50, 100, 100);
  //TheSeaLion.weapon();
  TheSeaLion.controls();

  TheGround.display();
  TheWall.display();
  TheTimer.display();

  for (i=0; i < TheBullets.length; i++){
    TheBullets[i].create();
    TheBullets[i].display();
  }

  //console.log(TheLions.length);
  for (i=0; i < TheLions.length; i++){
    TheLions[i].display();
  }
  drawSprites();
}

function keyPressed(){
  if (keyCode === 32){
    TheBullets.push(new Bullet(TheSeaLion.body.position.x, TheSeaLion.body.position.y, 75, 40, TheSeaLion.angle))
  }
}
