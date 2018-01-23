function SeaLion(x, y, w, h){
  this.w = 100;
  this.h = this.w;
  this.x = 300;
  this.y = 2*(height /3);

  var options = {

  }

  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
  console.log(this.body)
  //this.weapon = Bodies.rectangle(this.x, this.y, this.w * , this.h * 2, options);
  World.add(engine.world, this.body);
  this.pos = this.body.position;
  this.angle = 0;

  //vSeaLion = Vector.create(this.x, this.y);

  this.display = function() {
    // rectMode(CENTER);
    // fill(0);
    // rect(this.pos.x , this.pos.y, this.w, this.h);
    translate(this.pos.x, this.pos.y);

    rotate(this.angle);
    sl = createSprite(0,0, this.w, this.h);
    sl.addImage("SL_BODY", img[2]);
    //console.log(sl);
    slw = createSprite(0,0, this.w * 2, this.h/2);
    slw.addImage("SLW_BODY", img[4]);


  }

  this.weapon = function(){
    //rotate(90);
    //translate(this.pos.x, this.pos.y);

    push()
    translate(this.pos.x, this.pos.y,)

    pop()
  }

  this.controls = function(){
    if(keyIsDown(LEFT_ARROW)){
      console.log("left arrow");
      this.body.position.x -= 1;
    }
    if(keyIsDown(RIGHT_ARROW)){
      this.body.position.x += 1;
    }
    if(keyIsDown(UP_ARROW)){
      this.angle += 0.1;
    }
    if(keyIsDown(DOWN_ARROW)){
      this.angle -= .1;
    }
  }
}
