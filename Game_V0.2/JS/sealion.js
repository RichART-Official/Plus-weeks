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
  this.imgScale = 0.15;

  this.body = Bodies.rectangle(x, y, w, h, options);

  World.add(engine.world, this.body);
  //console.log(this.body);
  this.create = function(){
    var pos = this.body.position;
    slw = createSprite(pos.x, pos.y, this.w * 2, this.h/2);
    sl = createSprite(pos.x, pos.y, this.w, this.h);
    sl.scale = this.imgScale;
    slw.scale = this.imgScale;
  }
  this.display = function() {
    var pos = this.body.position;
    //console.log(angle);
    imageMode(CENTER);
    rectMode(CENTER);
    push();
    slw.addImage("SLW_BODY", img[2]);
    slw.position = {
      x: TheSeaLion.body.position.x,
      y: TheSeaLion.body.position.y
    }
    slw.rotation = this.angle;
    pop();
    push()

    sl.addImage("SL_BODY", img[5]);
    sl.position = {
      x: TheSeaLion.body.position.x,
      y: TheSeaLion.body.position.y
    }
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
      //console.log("left arrow");

      this.body.position.x -= .5;
    }
    if(keyIsDown(RIGHT_ARROW)){
      //console.log("right arrow");
      this.body.position.x += .5;
    }
    if(keyIsDown(UP_ARROW)){
      if(this.rotateValidation()){
        this.angle += 1;
        //this.body.position.y -= 1;
      } else {
        this.angle = 40;
      }
      //console.log(this.angle);
    }
    if(keyIsDown(DOWN_ARROW)){
      if(this.rotateValidation()){
        this.angle -= 1;
      } else {
        this.angle = -40;
      }
      //console.log(this.angle);
    }
  }

}
