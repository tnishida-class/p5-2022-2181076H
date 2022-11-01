// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  //calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  //for(let i = 2000; i <= 2100; i++){
    //if(isLeapYear(i)){
      //console.log(i + "年はうるう年です");
    //}
    //else{
      //console.log(i + "年はうるう年ではありません");
    //}
  //}

  //daysInYear(2022);
  //dayOfYear(2022, 1, 1);
  dayOfWeek(1981,7,17);
  dayOfWeek(2001,6,25);
  dayOfWeek(2022,11,1);
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);
  for(let d = 1; d <= daysInMonth(y, m); d++){
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

function daysInYear(y){
  if(isLeapYear(y)){
    return 366;
    }
    else{
    return 365;
    }
    
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);
  }
  //return count + d;
  console.log(count+d);
}

function dayOfWeek(y, m, d){
  let y_count =0;
  for(let i=1970;i<y;i++){
    y_count += daysInYear(i);
  }

  //console.log(y_count);

  let m_count = 0;
  for(let i = 1; i < m; i++){
    m_count += daysInMonth(y, i);
  }
  //return count + d;
  //console.log(m_count+d-1);
  //console.log(y_count+m_count+d-1);
  let day=y_count+m_count+d-1;
  //console.log(day);
  //console.log(day%7);
  console.log((4+day%7)%7);
  
  
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}
