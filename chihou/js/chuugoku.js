function display(URL) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[0].chanceOfRain.T18_24;
       if(date == "0%"||date == "10%"||date == "20%"){
       console.log(date);
       i++,
       console.log("晴れ：遊び場を全て表示する");
     }
     else console.log("雨：降水確率20%以下のみ表示する");
   }
request.send();
 }

 display('https:weather.tsukumijima.net/api/forecast?city=310010','tottori'); //鳥取
 display('https:weather.tsukumijima.net/api/forecast?city=320010','shimane'); //島根
 display('https:weather.tsukumijima.net/api/forecast?city=330010','okayama'); //岡山
 display('https:weather.tsukumijima.net/api/forecast?city=340010','hiroshima'); //広島
 display('https:weather.tsukumijima.net/api/forecast?city=350010','yamaguchi'); //山口
