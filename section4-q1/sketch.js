// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); 
  }
  
  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  let x,y;
  for(let i = 0; i <= scores.length; i++){
    const h = height * scores[i] / 100;
    strokeWeight(10);
    point(x, y);
    x=i * dx + 10;
    y=height - h;
    if(i>=1){
      px=(i-1) * dx + 10;
      py=height - (height * scores[i-1]/100);
      strokeWeight(2);
      line(px,py,x,y);

      

    }  
  }
}
