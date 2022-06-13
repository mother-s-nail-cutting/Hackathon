function display(URL) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[0].chanceOfRain.T18_24;
       if(date == "0%"||date == "10%"||date == "20%"){
       console.log(date);
       console.log("晴れ：遊び場を全て表示する");
     }
     else console.log("雨：降水確率20%以下のみ表示する");
   }
request.send();
 }

display('https:weather.tsukumijima.net/api/forecast?city=011000'); //道北
display('https:weather.tsukumijima.net/api/forecast?city=013010'); //道東
display('https:weather.tsukumijima.net/api/forecast?city=015010'); //道南
display('https:weather.tsukumijima.net/api/forecast?city=016010'); //道央
