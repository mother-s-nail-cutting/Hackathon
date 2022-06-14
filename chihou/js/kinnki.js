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

 display('https:weather.tsukumijima.net/api/forecast?city=240010','mie'); //三重
 display('https:weather.tsukumijima.net/api/forecast?city=250010','shiga'); //滋賀
 display('https:weather.tsukumijima.net/api/forecast?city=260010','kyouto'); //京都
 display('https:weather.tsukumijima.net/api/forecast?city=270010','osaka'); //大阪
 display('https:weather.tsukumijima.net/api/forecast?city=280010','hyougo'); //兵庫
 display('https:weather.tsukumijima.net/api/forecast?city=290010','nara'); //奈良
 display('https:weather.tsukumijima.net/api/forecast?city=300010','wakayama'); //和歌山
 display('https:weather.tsukumijima.net/api/forecast?city=310010','shizuoka'); //静岡
 display('https:weather.tsukumijima.net/api/forecast?city=320010','aiti'); //愛知
