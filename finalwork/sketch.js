let x, y, vx, vy,X,Y,t,s,dt,ds,r,ww,wh;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 3+100;
  vx=0;
  vy=0;
  dt=0;
  ds=0;
}

function draw(){
  //赤いボール
  background(150, 230, 150);
  push();
  fill(255,0,0);
  ellipse(x, y, 50);
  x+=vx;
  y+=vy;
  pop();

  if(y>windowHeight+100){//下に行き過ぎると戻る
    x = windowWidth / 2;
    y = windowHeight / 3+100;
    vx = 0;
    vy = 0;
  }
  //赤いボールここまで

  push();
  line(windowWidth/2-70,Y+100,0,0);
  line(windowWidth/2+70,Y+100,windowWidth,0);
  pop();

  ww=windowWidth;
  wh=windowHeight;
  
  textSize(ww/50);
  text("1~7→ボールを投げる\np→元に戻す\nw→バットを引く",ww/50,5*wh/7);

  rect(ww/5,wh/10,ww/20,20);//レフト
  rect(ww/2-ww/40,wh/10-20,ww/20,20);//センター
  rect(4*ww/5,wh/10,ww/20,20);//ライト
  rect(ww/5,wh/3+70,ww/20,20);//サード
  rect(ww/3,wh/3-50,ww/20,20);//ショート
  rect(2*ww/3-60,wh/3-50,ww/20,20);//セカンド
  rect(4*ww/5-ww/20,wh/3+70,ww/20,20);//ファースト
  

  if(y<-100){//上に行き過ぎると戻る
    x = width / 2;
    y = height / 3;
    vx = 0;
    vy = 0;
  }

  X=windowWidth/2-130;
  Y=windowHeight-250;
  arc(X,Y,400,400,t,s);
  t=-3*PI/4;
  s=-3*PI/4+PI/12;
  t+=dt;
  s+=ds;

  if(keyIsDown("W".charCodeAt(0))){ 
    dt += PI/30;
    ds += PI/30;
    if(t>PI/2){
      t=PI/2;
      s=PI/2+PI/12;
      t+=0;
      s+=0;
      dt -= PI/30;
      ds -= PI/30;
    }
  }
  else{
    if(t>PI/2){
      t=PI/2;
      s=PI/2+PI/12;
      dt -= PI/30;
      ds -= PI/30;
    }else{
    dt -= PI/70;
    ds -= PI/70;
  }
    if(t<-3*PI/4){
      t=-3*PI/4;
      s=-3*PI/4+PI/12;
      dt=0;
      ds=0;
    }
  }
  //x,yはボールの座標

  //バットにボールが当たったとき
  if(min_d2(x,y,X,Y,X+300*cos(t),Y+300*sin(t))<30){
    vx=r*sin(t);
    vy=-r*cos(t);
    r=random(3,8);
  }
  //アウト判定
  if(min_d2(x,y,ww/5,wh/10,ww/4,wh/10)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("レフトフライ",ww/2,wh/2);
  }
  if(min_d2(x,y,ww/2-ww/40,wh/10-20,21*ww/40,wh/10-20)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("センターフライ",ww/2,wh/2);
  }
  if(min_d2(x,y,4*ww/5,wh/10,17*ww/20,wh/10)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("ライトフライ",ww/2,wh/2);
  }
  if(min_d2(x,y,ww/5,wh/3+70,ww/10,wh/3+70)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("サードゴロ",ww/2,wh/2);
  }
  if(min_d2(x,y,ww/3,wh/3-50,ww/3+ww/20,wh/3-50)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("ショートゴロ",ww/2,wh/2);
  }
  if(min_d2(x,y,2*ww/3-60,wh/3-50,2*ww/3+ww/20,wh/3-50)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("セカンドゴロ",ww/2,wh/2);
  }
  if(min_d2(x,y,4*ww/5-ww/20,wh/3+70,4*ww/5-ww/20+ww/20,wh/3+70)<40){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("ファーストゴロ",ww/2,wh/2);
  }
  if(min_d2(x,y,0,0,ww,0)<30){
    vx=0;
    vy=0;
    textSize(ww/30);
    text("オオタニサーン！",ww/4,wh/2);
  }

  const dx = random(4);
  const dy = random(4);
  /*if(mag(dx, dy) > 5){ 
    const b = { x:random(windowWidth), y: random(2*windowHeight/5), size: random(20,60), vx: dx*random(-2,2), vy: dy*random(-2,2) };
    balls.push(b);
  }*/
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
}
const g = 1;     
const jump = 20; 
const ground = 20;
const size = 20;

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
let balls = [];
function keyTyped() {
  if (key === '1') {
    vy=2;
  }
  if (key === '2') {
    vy=5;
  }
  if (key === '3') {
    vy=10;
  }
  if (key === '4') {
    vy=15;
  }
  if (key === '5') {
    vy=20;
  }
  if (key === '6') {
    vy=25;
  }
  if (key === '7') {
    vy=random(7,25);
  }
  if(key==="s"){
    dt+=PI/70;
    ds+=PI/70;
  }
}

function keyPressed(){
  if(key === "p"){ // Pを押したらリセット
    x = windowWidth / 2;
    y = windowHeight / 3+100;
    vx = 0;
    vy = 0;
    grabbed = false;  
  } 
  if (key === 'q') {
    t=-5*PI/12;
    s=-PI/2;
    dt=0;
    ds=0;
  }
}


function min_d2(x0, y0, x1, y1, x2, y2) {
  var a = x2 - x1;
  var b = y2 - y1;
  var a2 = a * a;
  var b2 = b * b;
  var r2 = a2 + b2;//r2は線分の長さ
  var tt = -(a*(x1-x0)+b*(y1-y0));
  if( tt < 0 ) {
    return (x1-x0)*(x1-x0) + (y1-y0)*(y1-y0);
  }
  if( tt > r2 ) {
    return (x2-x0)*(x2-x0) + (y2-y0)*(y2-y0);
  }
  var f1 = a*(y1-y0)-b*(x1-x0);
  return (f1*f1)/r2;
}