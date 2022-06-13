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

display('https:weather.tsukumijima.net/api/forecast?city=080010','ibaragi'); //茨城
display('https:weather.tsukumijima.net/api/forecast?city=090010','totigi'); //栃木
display('https:weather.tsukumijima.net/api/forecast?city=100010','gunnma'); //群馬
display('https:weather.tsukumijima.net/api/forecast?city=110010','saitama'); //埼玉
display('https:weather.tsukumijima.net/api/forecast?city=120010','tiba'); //千葉
display('https:weather.tsukumijima.net/api/forecast?city=130010','tokyo'); //東京
display('https:weather.tsukumijima.net/api/forecast?city=140010','kanagawa'); //神奈川
