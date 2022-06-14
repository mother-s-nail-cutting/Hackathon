function display(URL,place) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[0].chanceOfRain.T18_24;
       if(date == "0%"||date == "10%"||date == "20%"){
       console.log(date);
       console.log("晴れ：遊び場を全て表示する");
     }
     else {document.getElementById(place).classList.add('rain');
       console.log("雨：降水確率2１%以上");
     }
   }
request.send();
 }

 display('https:weather.tsukumijima.net/api/forecast?city=150010','niigata'); //新潟
 display('https:weather.tsukumijima.net/api/forecast?city=160010','toyama'); //富山
 display('https:weather.tsukumijima.net/api/forecast?city=170010','ishikawa'); //石川
 display('https:weather.tsukumijima.net/api/forecast?city=180010','hukui'); //福井
 display('https:weather.tsukumijima.net/api/forecast?city=190010','yamanashi'); //山梨
 display('https:weather.tsukumijima.net/api/forecast?city=200010','nagano'); //長野
 display('https:weather.tsukumijima.net/api/forecast?city=210010','gihu'); //岐阜
 display('https:weather.tsukumijima.net/api/forecast?city=220010','shizuoka'); //静岡
 display('https:weather.tsukumijima.net/api/forecast?city=230010','aichi'); //愛知
