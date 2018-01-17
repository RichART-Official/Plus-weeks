var c = [];

function setup() {
  createCanvas(1280,720);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(100,100,100);
  for(i = 0; i < random(1000); i++) {
    var x = random(windowWidth);
    var y = random(windowHeight);
    c.push(ellipse(x, y, 55, 55));
    fill(255, 204, 0);
    noStroke();
  }
}

function move(){
  c[i]
}

console.log(c);