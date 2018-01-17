// module aliases
var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

//Elements
var engine;
var world;
var box1;

function setup() {
  
  createCanvas(400,400);
  background(20);
  engine = Engine.create();
  world = engine.world;
  box1 = Bodies.rectangle(200, 200, 100, 100);
  
  // run the engine
  Engine.run(engine);
  // add all of the bodies to the world
   World.add(engine.world, box1);
  
  console.log(box1);
}

function draw() {
  console.log(box1.position.x);
  rect(box1.position.x, box1.position.y, 80,80);
}