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
     else {document.getElementById(place).classList.add('rain');
       console.log("雨が降るかも：降水確率" + date);
     }
   }
request.send();
 }


 display('https:weather.tsukumijima.net/api/forecast?city=310010','tottori'); //鳥取
 display('https:weather.tsukumijima.net/api/forecast?city=320010','shimane'); //島根
 display('https:weather.tsukumijima.net/api/forecast?city=330010','okayama'); //岡山
 display('https:weather.tsukumijima.net/api/forecast?city=340010','hiroshima'); //広島
 display('https:weather.tsukumijima.net/api/forecast?city=350010','yamaguchi'); //山口
