//console.log("bullet.js working!")

function Bullet(x, y, w, h, a, ){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.a = a;
  // this.totalDist = .5;



  var options = {
    //options
  }
  this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, options)
  World.add(engine.world, this.body);
  Matter.Body.rotate(this.body, this.a, {
    x: this.body.position.x,
    y: this.body.position.y
  })

  // Calculate forceX and forceY automaticially based on shooting angle.
  // For now static values are entered.
  // this.vY = this.totalDist * sin(this.a);
  // this.vX = sqrt(sq(-1 * this.body.force.y)-sq(this.totalDist));

  this.body.force = {
    x: 0.05,
    y: -0.03
    // x: sqrt(sq(this.body.force.y)-sq(this.totalDist))
  }
  this.body.angle =  this.a;
  this.pos = this.body.position;
  console.log(this.body);
  this.create = function(){
      this.bl = createSprite(this.x, this.y, this.w, this.h);
      this.bl.addImage("LI_BODY", img[5]);
      this.bl.scale = .5
      this.bl.rotation = this.a;
      //Add to bullet group
      ammo.add(this.bl);
  }

  this.display = function(){
    push()
    this.bl.position = {
      x: this.body.position.x + 150,
      y: this.body.position.y
    }
    pop();
  }

  this.hit
}

function fire(){
  TheBullets.push(new Bullet(TheSeaLion.body.position.x, TheSeaLion.body.position.y, 38, 20, TheSeaLion.angle))
  // Events.on(engine, 'afterUpdate', function() {
  //         if (mouseConstraint.mouse.button === -1 && (rock.position.x > 190 || rock.position.y < 430)) {
  //             rock = Bodies.polygon(170, 450, 7, 20, rockOptions);
  //             World.add(engine.world, rock);
  //             elastic.bodyB = rock;
  //         }
  //     });

}
