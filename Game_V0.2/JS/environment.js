function backdrop(){
  var x = width /2;
  var y = height /2;
  bg = createSprite(x,y);
  bg.shapeColor = color(0);
  bg.addImage('BG_CONT', img[0]);
}

function Ground(){
  this.w = width * 2;
  this.h = 300;
  this.x = width /3;
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
    ;
    fill(255, 0,0);
    noStroke();
    
    rect(this.pos.x , this.pos.y, this.w, this.h);
  }
}

function Wall(){

  this.w = 100;
  this.h = 1.25*(height / 3);
  this.x = width / 2.35;
  this.y = height - (this.h /2);


  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, { isStatic: true });
  World.add(engine.world, this.body);
  
  wll = createSprite(this.x, this.y, this.w, this.h);

  this.pos = this.body.position;

  this.display = function(){
    rectMode(CENTER);
    //fill(0);
    //rect(this.pos.x , this.pos.y, this.w, this.h);
    wll.addImage("WLL_BODY", img[1]);
    wll.scale = 0.6;
  }
}
