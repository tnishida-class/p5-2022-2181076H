let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
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
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: random(20,100), vx: dx, vy: dy };
    balls.push(b);
  }
}
