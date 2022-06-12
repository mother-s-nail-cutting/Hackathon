
  const request = new XMLHttpRequest();
     id = 011000;
     URL = 'https:weather.tsukumijima.net/api/forecast?city=id&dateLabel = "明日"&chanceOfRain=T12_18';
     request.open('GET', URL, true);
     request.responseType = 'json'
      console.log("こんにちわ");

      request.send();
/*  display: function(syuu[]) {  // 匿名関数でメソッド定義
    syuu.area.forEach(function( id ,spot) {
       if(syuu.area.geti>0.2)

  }*/
