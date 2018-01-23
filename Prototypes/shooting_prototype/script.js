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
  createCanvas(1920, 400);
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

function draw() {
  background(51);
  Engine.update(engine);
  for (i=0; i < boxes.length; i++){
    boxes[i].display();
  }
}

function bullet(degrees, velocity) {
  var options = {

  }
  this.body = Bodies.rectangle(mouseX, mouseY, 20, 20, options)
  World.add(engine.world, this.body)
  this.display = function(){
    fill(255);
    translate(this.body.position.x, this.body.position.y);
    rect(0,0,20,20);
    Matter.Body.applyForce(this.body, {
      x: mouseX,
      y: mouseY
    }, {
      x: 0.00005,
      y: -0.0001
    });
    // Matter.Body.setMass(this.body, 5);
    // Matter.Body.setVelocity(this.body, {
    //   x: 1,
    //   y: -1
    // })
    // Matter.Body.setAngle(this.body, 180)
    // Matter.Body.setInertia(this.body, 2)
  }

}

function mousePressed(){
  boxes.push( new bullet(45, .3))
}


// function Box(x, y, w, h) {
//   var options = {
//     friction: 0.3,
//     restitution: 0.6
//   }
//   this.body = Bodies.rectangle(x, y, w, h, options);
//   this.w = w;
//   this.h = h;
//   World.add(world, this.body);
//
//   this.show = function() {
//     var pos = this.body.position;
//     var angle = this.body.angle;
//     push();
//     translate(pos.x, pos.y);
//     rotate(angle);
//     rectMode(CENTER);
//     strokeWeight(1);
//     stroke(255);
//     fill(127);
//     rect(0, 0, this.w, this.h);
//
//     pop();
//     // Body.applyForce(this.body, {
//     //   x: 0.25,
//     //   y:  0.25
//     // }, {
//     //   x:  10,
//     //   y:  0.25
//     // })
//
//   }
//
//
//     this.controls = function(){
//
//       if(keyIsDown(ENTER)){
//
//       }
//       if(keyIsDown(UP_ARROW)){
//         angle += 5;
//       }
//       if(keyIsDown(DOWN_ARROW)){
//         angle -= 5;
//       }
//
//     }
//
// }
