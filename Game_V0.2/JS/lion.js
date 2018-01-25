//.log("lion working!");

function Lion(x, y, w, h) {
  push()
  //console.log(this.x);

  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  World.add(engine.world, this.body);

  var li;
  //vSeaLion = Vector.create(this.x, this.y);
  this.create = function(){
    this.li = createSprite(x, y, this.w, this.h);
    this.li.addImage("LI_BODY", img[3]);
  }
  this.display = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    //translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    // strokeWeight(1);
    // stroke(255);
    // fill(127);
    // rect(0, 0, this.w, this.h);
//    li.addImage("LI_BODY", img[3]);
    this.li.position = {
//      x: TheLions[i].body.position.x,
//      y: TheLions[i].body.position.y
      x: this.body.position.x,
      y: this.body.position.y
    }
    pop();
    //li = createSprite(this.pos.x, this.pos.y, this.w, this.h);

    // rectMode(CENTER);
    // fill(0);
    // rect(this.pos.x , this.pos.y, this.w, this.h);
    //draw();

    //li.addImage("L_BODY", img[3]);
  }

}
