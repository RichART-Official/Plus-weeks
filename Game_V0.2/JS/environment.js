function backdrop(){
  var x = width /2;
  var y = height /2;
  bg = createSprite(x,y);
  bg.shapeColor = color(0);
  bg.addImage('BG_CONT', img[0]);
}

function Ground(){
  this.w = width * 2;
  this.h = 100;
  this.x = width /2;
  this.y = height;
  this.options = {
    isStatic: true,
    friction: 1,
    restitution: 1
  }

  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
  World.add(engine.world, this.body);
  this.pos = this.body.position;

  this.display = function(){
    rectMode(CENTER);
    noFill();
    noStroke();
    
    rect(this.pos.x , this.pos.y, this.w, this.h);
  }
}

function Wall(){

  this.w = 150;
  this.h = 1.25*(height / 3);
  this.x = width / 3;
  this.y = height - (this.h /2);


  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, { isStatic: true });
  World.add(engine.world, this.body);
  //console.log(wall);
  this.pos = this.body.position;

  this.display = function(){
    rectMode(CENTER);
    fill(0);
    rect(this.pos.x , this.pos.y, this.w, this.h);
    //image(img[1], this.pos.x , this.pos.y)
  }
}
