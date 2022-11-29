// チェッカー
function setup() {
  createCanvas(200, 200);
    let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      
      if((i+j)%2==0){
        fill(255);
        rect(i*20,j*20, 20, 20);
      }
      else{
        fill(120);
        rect(i*20,j*20, 20, 20);  
      }
    }
  }
for(let i = 0; i < 8; i++){
    for(let j = 0; j < 3; j++){ 
      if((i+j)%2==0){
      }
      else{
        fill(255,0,0);
        ellipse(10+i*20,10+j*20,18,18)
      }
    }
  }
  for(let i = 0; i < 8; i++){
    for(let j = 5; j < 8; j++){
      if((i+j)%2==0){
      }
      else{
        fill(0);
        ellipse(10+i*20,10+j*20,18,18)
      }
    }
  }
}
