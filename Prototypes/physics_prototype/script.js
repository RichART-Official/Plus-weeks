// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/urR596FsU68

// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine;
var world;
var boxes = [];


var ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
  //Engine.run(engine);
  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, height, width, 100, options);

  World.add(world, ground);
}

// function keyPressed() {
//   if (key == ' ') {
//   }
// }

function mousePressed() {
  var Ypos = mouseY;
  boxes.push(new Box(mouseX, mouseY, random(10, 40), random(10, 40)));
  Body.translate(boxes[boxes.length - 1], {
    x: 5,
    y: 5
  })
  //Body.setAngularVelocity(boxes[boxes.length - 1].body, 2)
  //Body.update(boxes[boxes.length - 1], 10, 100, 1)
  Body.applyForce(boxes[boxes.length - 1].body, {
    x: 100,
    y: 300
  }, 0.0)

}

function draw() {
  background(51);
  Engine.update(engine);
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].show();
    boxes[i].controls();
  }
  noStroke(255);
  fill(170);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 100);

}

function Box(x, y, w, h) {
  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  World.add(world, this.body);

  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(255);
    fill(127);
    rect(0, 0, this.w, this.h);

    pop();
    // Body.applyForce(this.body, {
    //   x: 0.25,
    //   y:  0.25
    // }, {
    //   x:  10,
    //   y:  0.25
    // })

  }


    this.controls = function(){

      if(keyIsDown(ENTER)){

      }
      if(keyIsDown(UP_ARROW)){
        angle += 5;
      }
      if(keyIsDown(DOWN_ARROW)){
        angle -= 5;
      }

    }

}
