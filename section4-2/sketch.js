let balls = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
    size=random(20,100);
    b.size =size; // 60以上100未満のランダムな数を代入
  }
}

function mouseDragged(){ // ドラッグされたらボールを増やす
  const dx = mouseX - pmouseX;
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){ // mag(x,y) はベクトル(x,y)の長さ
    const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
    balls.push(b);
  }
}

