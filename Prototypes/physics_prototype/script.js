// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

//Elements
var engine;
var world;
var box1;
var ground;

function setup() {

  createCanvas(500,500);
  background(20);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(250, height, width, 10, { isStatic: true});
  box1 = new Box(200, 100, 50, 50);

  // run the engine
  Engine.run(engine);
  // add all of the bodies to the world
   World.add(engine.world, ground);

  //console.log(box1);
}

function draw() {
  //console.log(box1.position.x);
  //rect(box1.position.x, box1.position.y, 80,80);
  Matter.Body.applyForce(box1, { x: 0, y: 0 }, { x: 0.1, y: 0 });
  box1.show();
}

function Box(x, y, w, h){
  this.body = Bodies.rectangle(x, y, w, h);

  this.w = w;
  this.h = h
  this.x = x;
  this.y = y;
  World.add(world, this.body);

  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rect(0, 0, this.w, this.h);

    pop();
  }
}
