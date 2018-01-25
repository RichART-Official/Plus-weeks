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
var TheFish = [];

//Physics-Bodies
var ground, seaLion, wall, lion, bullet;

//Physics-Vectors
//var vSeaLion;
//Sprites
//var wll, bg, sl, slw, li, fi;
var wll, bg, sl, slw, fi;

//Assets
var img = [];

function preload(){
  img[0] = loadImage("img/bg.jpg");
  img[1] = loadImage("img/wll.jpeg");
  img[2] = loadImage("img/Sea_Lion/SL0001.png");
  img[3] = loadImage("img/Lion/L0001.png");
  img[4] = loadImage("img/Sea_Lion_weapon/SLW0001.png");
  img[5] = loadImage("img/Sea_Lion/SL0002.png");
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
  //TheBullet = new Bullet();
  TheWall = new Wall();
  for (i=0; i < TheLions.length; i++){
    TheLions[i].create();
  }
  TheSeaLion.create();
  //Create world and engine
  // Add all of the bodies to the world
  //Vector.add(vSeaLion);
  // run the engine

  Engine.run(engine);

}

function draw() {
  //BACKGROUND
  background(250);

  //ASSETS
  TheSeaLion.display(width /4, 50, 100, 100);
  //TheSeaLion.weapon();
  TheSeaLion.controls();

  TheGround.display();
  TheWall.display();
  TheTimer.display();
  //console.log(TheLions.length);
  for (i=0; i < TheLions.length; i++){
    TheLions[i].display();
  /*  li.position = {
      x: TheLions[i].body.position.x,
      y: TheLions[i].body.position.y
    }*/
  }
  //backdrop();
  //wall();

  drawSprites();

}



// function wall(){
//   var wllHeight = (height / 3.5)*2;
//   var wllWidth = 200;
//   wll = createSprite(width/3 , height - (wllHeight/2), 30 , wllHeight)
//   wll.addImage('WLL_CONT', img[1]);
// }

//   function SeaLion() {
//     this.x = 200;
//     this.y = 500;
//
//     this.display = function(){
//       sl = createSprite(boxs1.position.x, box1.position.y);
//       sl.shapeColor = color(0);
//       sl.addImage('SL_CONT', img[2]);
//       rect(this.x, this.y, 30, 30);
//     }
//
//     this.movement = function(){
//       //sl.draw = function() { translate(box1.position.x, box1.position.y) }
//     }
// }
