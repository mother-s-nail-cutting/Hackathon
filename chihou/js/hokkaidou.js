function display(URL,place) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[1].chanceOfRain.T12_18;
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

display('https:weather.tsukumijima.net/api/forecast?city=011000','north'); //道北
display('https:weather.tsukumijima.net/api/forecast?city=013010','east'); //道東
display('https:weather.tsukumijima.net/api/forecast?city=015010','south'); //道南
display('https:weather.tsukumijima.net/api/forecast?city=016010','center'); //道央
