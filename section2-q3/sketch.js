// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; 
  const cy = height / 2;
  const maxR = min(width, height); 
  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  drawArcs(cream,black,maxR*0.75);
  drawArcs(green, red, maxR * 0.4);
  drawArcs(cream,black,maxR*0.35);
  drawCircle(green, maxR * 0.1);
  drawCircle(red, maxR * 0.05);
}
function drawCircle(c, r){
  fill(c);
  ellipse(200,200, r, r);
}

function drawArcs(green, red, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? green : red);
    arc(200, 200, r, r, start, stop, PIE);
  }
}
