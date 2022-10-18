let x, y, vx, vy;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);
  
  if(keyIsDown("V".charCodeAt(0))){ 
    x -= 5;}
    else if(x<width/2){
      x += 10;} 
  
  if(keyIsDown("N".charCodeAt(0))){ 
    x += 5;}
    else if(x>width/2){
      x -= 10;} 
  
  
  if(keyIsDown("H".charCodeAt(0))){ 
    y-=5; }
    else if(y<height/2){
      y += 10; 
  }
  if(keyIsDown("B".charCodeAt(0))){ 
    y+=5; }
    else if(y>height/2){
      y -= 10; 
  }
}
const g = 1;     
const jump = 20; 
const ground = 20;
const size = 20;







function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
