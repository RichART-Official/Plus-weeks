function SeaLion(x, y, w, h){
  var options = {
    friction: 0.3,
    restitution: 0.6
  }

  this.w = w;
  this.h = h;
  this.x = x;
  this.y = y;

  this.body = Bodies.rectangle(x, y, w, h, options);

  World.add(engine.world, this.body);
  //vSeaLion = Vector.create(this.x, this.y);
  console.log(this.body);
  this.display = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    //console.log(angle);
    push()
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    rectMode(CENTER);
    // sl = createSprite(0,0, this.w, this.h);
    // sl.addImage("SL_BODY", img[5]);
    // slw = createSprite(0,0, this.w * 2, this.h/2);
    // slw.addImage("SLW_BODY", img[2]);
    fill(0);
    rect(0,0, this.w, this.h);
    //console.log(sl);
    pop();

    push();
    translate(pos.x, pos.y);
    fill(50);
    rect(0,0, this.w *2, this.h);
    pop();

    //pop();



  }

  this.weapon = function(){
    //rotate(90);
    //translate(this.pos.x, this.pos.y);

  }

  this.controls = function(){
    if(keyIsDown(LEFT_ARROW)){
      console.log("left arrow");
      this.body.position.x -= 1;
    }
    if(keyIsDown(RIGHT_ARROW)){
      console.log("right arrow");
      this.body.position.x += 1;
    }
    if(keyIsDown(UP_ARROW)){
      this.body.angle += 0.1;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.body.angle -= .1;
    }
  }
  pop();
}
