let x, y, vx, vy;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 3;
  vy=0;
}

function draw(){
  //赤いボール
  background(200, 255, 200);
  push();
  fill(255,0,0);
  ellipse(x, y, 50);
  y+=vy;
  pop();
  if(keyIsDown("V".charCodeAt(0))){ 
    x -= 5;}
    else if(x<width/2){
      x += 10;} 
  if(keyIsDown("N".charCodeAt(0))){ 
    x += 5;}
    else if(x>width/2){
      x -= 10;} 
  if(keyIsDown("B".charCodeAt(0))){ 
    y-=5; }
    else if(y<height/2){
      y += 10; }
  if(keyIsDown(" ".charCodeAt(0))){ 
    y+=5; }
    else if(y>height/2){
      y -= 10; }

  const dx = random(4);
  const dy = random(4);

  if(mag(dx, dy) > 5){ 
    const b = { x:random(windowWidth), y: random(windowHeight/5), size: random(20,60), vx: dx*random(-2,2), vy: 5 };
    balls.push(b);
  }
  for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    ellipse(b.x, b.y,b.size);
    b.x += b.vx;
    b.y += b.vy; 

    if(dist(x,y,b.x,b.y)<25){
      text("a",100,100);
      break;     
    }
  }

  //if(dist(x,y,b.x,b.y)==25){
  //}

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
  for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}*/

function keyPressed(){
  if(key == "p"){ // Pを押したらリセット
    x = width / 2;
    y = height / 3;
    vx = 0;
    vy = 0;
    grabbed = false;  
  } 
}

function keyTyped() {
  if (key === 'a') {
    vy=2;
  }
}

