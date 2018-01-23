function SeaLion(x, y, w, h){
  var options = {
    friction: 1,
    restitution: 0.0
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
    imageMode(CENTER);
    rectMode(CENTER);
    push()
    translate(pos.x, pos.y);
    rotate(angle);

    sl = createSprite(pos.x, pos.y, this.w, this.h);
    sl.addImage("SL_BODY", img[5]);

    // fill(0);
    // rect(0,0, this.w, this.h);
    //console.log(sl);
    pop();

    push();
    translate(pos.x, pos.y);
    //fill(50);
    //rect(0,0, this.w *2, this.h);
    slw = createSprite(pos.x, pos.y, this.w * 2, this.h/2);
    slw.addImage("SLW_BODY", img[2]);
    pop();

    //pop();



  }

  this.bullet = function(){

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

      this.body.position.y -= 10;
      //this.body.angle += 0.1;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.body.angle -= .1;
    }
  }
  pop();
}
