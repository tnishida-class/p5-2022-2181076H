// 国旗
function setup() {
  const yellow = color(255, 204, 0);
  const red = color(255, 0, 0);
  createCanvas(400, 400);
  background(255);
  stroke(255,0,0);
  strokeWeight(2);
  const cx = width / 2; 
  const cy = height / 2;
  const maxR = min(width, height); 
  drawArcs(yellow,red,maxR,maxR,0.8*Math.PI)
  drawCircle(yellow, maxR*0.1 );

}
function drawCircle(c, r){
  fill(c);
  ellipse(200,200, r, r);
}

function drawArcs(yellow, red, r,r,PI) {
  for (let i = 0; i < 16; i++) {
    let start = TWO_PI / 16 * i;
    let stop = TWO_PI / 16 * (i + 1);
    fill(i % 2 == 0 ? yellow : red);
    arc(200, 200, r, r, start, stop, PIE);
  }
}