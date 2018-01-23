//.log("lion working!");

function Lion(x, y, w, h) {
  push()
  //console.log(this.x);

  var options = {

  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  World.add(engine.world, this.body);


  //vSeaLion = Vector.create(this.x, this.y);

  this.display = function() {
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
    //li = createSprite(this.pos.x, this.pos.y, this.w, this.h);

    // rectMode(CENTER);
    // fill(0);
    // rect(this.pos.x , this.pos.y, this.w, this.h);
    //draw();

    //li.addImage("L_BODY", img[3]);
  }

}
