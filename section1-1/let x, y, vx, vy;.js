let x, y, vx, vy;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  push();
  fill(255,0,0);
  ellipse(x, y, 50);
  pop();
  
  if(keyIsDown("V".charCodeAt(0))){ 
    x -= 5;}
    else if(x<width/2){
      x += 10;} 
  if(keyIsDown("N".charCodeAt(0))){ 
    x += 5;}
    else if(x>width/2){
      x -= 10;} 
  if(keyIsDown(" ".charCodeAt(0))){ 
    y-=5; }
    else if(y<height/2){
      y += 10; }
  if(keyIsDown("B".charCodeAt(0))){ 
    y+=5; }
    else if(y>height/2){
      y -= 10; }
  
  const dx = random(4);
  const dy = random(4);
  if(mag(dx, dy) > 5){ 
    const b = { x:random(windowWidth), y: random(2*windowHeight/5), size: random(20,60), vx: dx*random(-2,2), vy: dy*random(-2,2) };
    balls.push(b);
  }
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y,b.size);
    b.x += b.vx;
    b.y += b.vy; 
  }
}
const g = 1;     
const jump = 20; 
const ground = 20;
const size = 20;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}


let balls = [];


/*function draw(){
  background(160, 192, 255);
  const dx = random(5);
  const dy = random(5);
  if(mag(dx, dy) > 5){ 
    const b = { x:random(windowWidth), y: random(windowHeight), size: random(20,70), vx: dx, vy: dy };
    balls.push(b);
  }
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y,b.size);
    b.x += b.vx;
    b.y += b.vy; 
  }
}*/

/*function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(20,100), vx: dx, vy: dy };
    balls.push(b);
  }
}*/