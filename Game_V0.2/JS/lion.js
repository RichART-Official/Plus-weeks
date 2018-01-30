function Lion(x, y, w, h) {
  push()
  var options = {
    friction: 0.3,
    restitution: 0.6
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;

  World.add(engine.world, this.body);

  var li;
  this.create = function(){
    this.li = createSprite(x, y, this.w, this.h);
    this.li.addAnimation("LI_BODY", walkcycles[0]);
    this.li.scale = 0.5;
    //Add new lion to sprite groups
    targets.add(this.li);

  }
  this.display = function() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    rotate(angle);
    rectMode(CENTER);
;
    this.li.position = {
      x: this.body.position.x,
      y: this.body.position.y
    }
    pop();
  }
}
