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


 display('https:weather.tsukumijima.net/api/forecast?city=471010','hokubu'); //北部
 display('https:weather.tsukumijima.net/api/forecast?city=473000','nannbu'); //南部
