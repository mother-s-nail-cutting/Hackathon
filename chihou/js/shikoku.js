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

 display('https:weather.tsukumijima.net/api/forecast?city=360010','tokushima'); //徳島
 display('https:weather.tsukumijima.net/api/forecast?city=370010','kagawa'); //香川
 display('https:weather.tsukumijima.net/api/forecast?city=380010','ehime'); //愛媛
 display('https:weather.tsukumijima.net/api/forecast?city=390010','kouti'); //高知
