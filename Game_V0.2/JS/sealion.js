function SeaLion(x, y, w, h){
  this.w = 20;
  this.h = this.w;
  this.x = 300;
  this.y = 2*(height /3);

  var options = {

  }

  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
  World.add(engine.world, this.body);
  console.log(seaLion);
  this.pos = this.body.position;

  //vSeaLion = Vector.create(this.x, this.y);

  this.display = function() {
    // rectMode(CENTER);
    // fill(0);
    // rect(this.pos.x , this.pos.y, this.w, this.h);
    sl = createSprite(this.pos.x, this.pos.y, this.w, this.h);
    sl.addImage("SL_BODY", img[2]);
  }

  this.controls = function(){
    if(keyIsDown(LEFT_ARROW)){

    }
    if(keyIsDown(RIGHT_ARROW)){

    }
    if(keyIsDown(UP_ARROW)){

    }
    if(keyIsDown(DOWN_ARROW)){

    }
  }
}
