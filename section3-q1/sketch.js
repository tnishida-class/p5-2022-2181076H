// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let r;

function setup(){
  createCanvas(windowWidth, windowHeight);
  count = 10;
  r=1;
}

function draw(){
  background(160, 192, 255);
  count = count +r;
  if(count<10||count>50){
    r=-1*r;
  }
  // BLANK[1]
  ellipse(width/2, height/2, count);
}

function keyPressed(){
  if(key==" "){r=2*r;}
}

function keyReleased(){
  if(key==" "){r=0.5*r;}
}

