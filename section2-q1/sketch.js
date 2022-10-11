// 小手調べ
function setup(){
  noFill()
  for(let i = 10; i<=50; i=i+10){
    stroke(0,0,255);
    ellipse(50,50,i);
  }
  for(let i = 60; i<=100; i=i+10){
    stroke(255,1,0);
    ellipse(50,50,i);
  }
}
