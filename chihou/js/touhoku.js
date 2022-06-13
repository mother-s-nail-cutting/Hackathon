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

display('https:weather.tsukumijima.net/api/forecast?city=020010','aomori'); //青森
display('https:weather.tsukumijima.net/api/forecast?city=030010','iwate'); //岩手
display('https:weather.tsukumijima.net/api/forecast?city=040010','miyagi'); //宮城
display('https:weather.tsukumijima.net/api/forecast?city=050010','akita'); //秋田
display('https:weather.tsukumijima.net/api/forecast?city=060010','yamagata'); //山形
