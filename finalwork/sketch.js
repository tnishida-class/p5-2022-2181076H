let x, y, vx, vy,X,Y,t,s,dt,ds,r;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight / 3;
  vx=0;
  vy=0;
  dt=0;
  ds=0;
}

function draw(){
  //赤いボール
  background(100, 255, 100);
  push();
  fill(255,0,0);
  ellipse(x, y, 50);
  x+=vx;
  y+=vy;
  pop();
  /*if(keyIsDown("V".charCodeAt(0))){ 
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
      y -= 10; }*/

  if(y>windowHeight+100){//下に行き過ぎると戻る
    x = windowWidth / 2;
    y = windowHeight / 3;
    vx = 0;
    vy = 0;
  }
  //赤いボールここまで
  
  //バット
      
  //rect(X, Y, 200, 30);
  X=windowWidth/2-130;
  Y=windowHeight-250;
  arc(X,Y,400,400,t,s);
  t=5*PI/12;
  s=PI/2;
  t+=dt;
  s+=ds;


  push();
  line(windowWidth/2-70,Y+100,0,0);
  line(windowWidth/2+70,Y+100,windowWidth,0);
  pop();

  rect(windowWidth/5,windowHeight/10,windowWidth/20,20);
  

  /*if(dist(x,y,X+300*cos(t),Y+300*sin(t))<=50){
    vy=-5;
    if(y<0){//上に行き過ぎると戻る
      x = width / 2;
      y = height / 3;
      vx = 0;
      vy = 0;
    }
  }*/

  if(y<-100){//上に行き過ぎると戻る
    x = width / 2;
    y = height / 3;
    vx = 0;
    vy = 0;
  }

  if(t>-21*PI/16){

  if(keyIsDown("W".charCodeAt(0))){ 
    dt -= PI/30;
    ds -= PI/30;
  }else{
    dt += PI/10;
    ds += PI/10;
    if(s>PI/2){
      t=5*PI/12;
      s=PI/2;
      dt=0;
      ds=0;
    }
  }
}else{
  t+=0;
  s+=0;
}
//逆にする（初めスイング後でｗ押して引いて、離すと戻る）


  //x,yはボールの座標

  //バットにボールが当たったとき
  if(min_d2(x,y,X,Y,X+300*cos(t),Y+300*sin(t))<30){
    vx=r*sin(t);
    vy=-r*cos(t);
    r=random(3,15)
  }

  if(min_d2(x,y,windowWidth/5,windowHeight/10,windowWidth/5+windowWidth/20,windowHeight/10)<30){
    vx=0;
    vy=0;
    textSize(100);
    text("out",windowWidth/2,windowHeight/2);
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
    dt-=PI/70;
    ds-=PI/70;
  }
}

function keyPressed(){
  if(key === "p"){ // Pを押したらリセット
    x = windowWidth / 2;
    y = windowHeight / 3;
    vx = 0;
    vy = 0;
    grabbed = false;  
  } 
  if (key === 'q') {
    t=5*PI/12;
    s=PI/2;
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