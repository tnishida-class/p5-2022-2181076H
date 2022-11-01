// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I do not like keyakizaka46.");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent(t) + textDescent(t);
  let p = 2;
  fill(0,0,255);
  noStroke();
  rect(0, 0, w + p * 20, h + p * 20);
  push();
  fill(255);
  text(t, 2, 1.5*h);
  pop();
  beginShape();
  //Fill(255);
  //for (i=1;i<=3;i++){
    //r=30;
    //const theta = TWO_PI * i * 2 / 5 - HALF_PI;
  //let x = w*i+r*cos(theta) ;
  //let y = h*i+r*sin(theta) ;
  //vertex(x,y);
//}
  vertex((w+p*20)/2,h+p*20);
  vertex(w+p*20,2*(h+p*20));
  vertex(3*(w+p*20)/4,h+p*20);
  endShape(CLOSE);
}
