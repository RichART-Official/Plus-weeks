console.log("bullet.js working!")
function Bullet(x, y, w, h, a){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.a = a;

  var options = {
    //options
  }
  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options)
  World.add(engine.world, this.body);

  this.pos = this.body.position;

  this.create = function(){
      this.bl = createSprite(this.x, this.y, this.w, this.h);
      this.bl.addImage("LI_BODY", img[6]);
      this.bl.scale = .35
      this.bl.rotation = this.a;
  }

  this.display = function(){
    push()
    this.bl.position = {
//      x: TheLions[i].body.position.x,
//      y: TheLions[i].body.position.y
      x: this.body.position.x,
      y: this.body.position.y
    }
    pop();
  }
}
