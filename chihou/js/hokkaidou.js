
/*  var hokkaikou = {
    const api = 'https:weather.tsukumijima.net/api/forecast?city=011000'
    fetch(api)
        .then(response =>response.json())
      .then(json => if（json.forecasts[0].chanceOfRain.T12_18 == "0%")
       console.log(json.forecasts[0].chanceOfRain.T18_24);
       //else console.log("雨です"));)
       //console.log(json.forecasts[0].chanceOfRain.T18_24))
      .catch(error =>
    console.log("失敗しました")),
  ;
/*json.forecasts[0].chanceOfRain.T12_18 == "10%" ||
 json.forecasts[0].chanceOfRain.T12_18_18 == "20%")*/
var i = 0;
 //URL = 'https:weather.tsukumijima.net/api/forecast?city=011000';
 function display(URL) {
   var request = new XMLHttpRequest();
     request.open('GET', URL, true);
     request.responseType = 'json'
     request.onload = function(){
       const date = this.response.forecasts[0].chanceOfRain.T18_24;
       if(date == "0%"||date == "10%"||date == "20%"){
       console.log(date);
       i++,
       console.log("晴れ：遊び場を全て表示する"+i);
     }
     else console.log("雨：降水確率20%以下のみ表示する");
   }
request.send();
 }

display('https:weather.tsukumijima.net/api/forecast?city=011000'); //道北
display('https:weather.tsukumijima.net/api/forecast?city=013010'); //道東
display('https:weather.tsukumijima.net/api/forecast?city=015010'); //道南
display('https:weather.tsukumijima.net/api/forecast?city=016010'); //道央
