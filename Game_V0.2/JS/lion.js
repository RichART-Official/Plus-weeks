console.log("lion working!");

function Lion(x, y, w, h) {
  this.w = 20;
  this.h = this.w;
  this.x = x;
  this.y = height;
  console.log(this.x);

  var options = {

  }

  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options);
  World.add(engine.world, this.body);
  console.log(lion);
  this.pos = this.body.position;

  //vSeaLion = Vector.create(this.x, this.y);

  this.display = function() {
    // rectMode(CENTER);
    // fill(0);
    // rect(this.pos.x , this.pos.y, this.w, this.h);
    li = createSprite(this.pos.x, this.pos.y, this.w, this.h);
    li.addImage("L_BODY", img[3]);
  }

}
