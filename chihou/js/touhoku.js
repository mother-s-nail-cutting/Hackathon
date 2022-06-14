function display(URL,place) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[1].chanceOfRain.T12_18;
       if(date == "0%"||date == "10%"||date == "20%"){
       console.log(date);
       console.log("晴れ："+ date);
     }
     else {
       document.getElementById(place).classList.add('rain');
       console.log("雨が降るかも：降水確率" + date);
     }
   }
request.send();
 }

display('https:weather.tsukumijima.net/api/forecast?city=020010','aomori'); //青森
display('https:weather.tsukumijima.net/api/forecast?city=030010','iwate'); //岩手
display('https:weather.tsukumijima.net/api/forecast?city=040010','miyagi'); //宮城
display('https:weather.tsukumijima.net/api/forecast?city=050010','akita'); //秋田
display('https:weather.tsukumijima.net/api/forecast?city=060010','yamagata'); //山形
display('https:weather.tsukumijima.net/api/forecast?city=070010','hukushima'); //福島
