function SeaLion(x, y, w, h){
  var options = {
    friction: 1,
    restitution: 1
  }

  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;
  this.angle = 0;
  this.imgScale = 0.25;

  this.body = Bodies.circle(x, y, w, options);

  World.add(engine.world, this.body);
  //console.log(this.body);
  this.create = function(){
    var pos = this.body.position;

    sl = createSprite(pos.x, pos.y, this.w, this.h);
    slw = createSprite(pos.x, pos.y, this.w * 2, this.h/2);
    sl.scale = this.imgScale;
    slw.scale = this.imgScale;
  }
  this.display = function() {
    var pos = this.body.position;
    //console.log(angle);
    imageMode(CENTER);
    rectMode(CENTER);
    push()

    sl.addImage("SL_BODY", img[4]);
    sl.position = {
      x: TheSeaLion.body.position.x -25,
      y: TheSeaLion.body.position.y +75
    }
    pop()
    push();
    slw.addImage("SLW_BODY", img[3]);
    slw.position = {
      x: TheSeaLion.body.position.x,
      y: TheSeaLion.body.position.y
    }
    slw.rotation = this.angle;
    pop();

  }
  this.bullet = function(){

  }
  this.rotateValidation = function(){
      if(this.angle < 40 || this.angle > -40) {
        return true;
      }
  }
  this.controls = function(){
    if(keyIsDown(LEFT_ARROW)){
      if(TheSeaLion.body.position.x <= 0) {
        this.body.position.x += .5;
      } else {
        this.body.position.x -= .5;
      }

    }
    if(keyIsDown(RIGHT_ARROW)){
      this.body.position.x += .5;
    }
    if(keyIsDown(UP_ARROW)){
      if(this.rotateValidation()){
        this.angle += 1;
      } else {
        this.angle = 40;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      if(this.rotateValidation()){
        this.angle -= 1;
      } else {
        this.angle = -40;
      }
    }

  }
}
