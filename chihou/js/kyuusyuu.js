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

 display('https:weather.tsukumijima.net/api/forecast?city=400010','hukuoka'); //福岡
 display('https:weather.tsukumijima.net/api/forecast?city=410010','saga'); //佐賀
 display('https:weather.tsukumijima.net/api/forecast?city=420010','nagasaki'); //長崎
 display('https:weather.tsukumijima.net/api/forecast?city=430010','kumamoto'); //熊本
 display('https:weather.tsukumijima.net/api/forecast?city=440010','ooita'); //大分
 display('https:weather.tsukumijima.net/api/forecast?city=450010','miyazaki'); //宮崎
 display('https:weather.tsukumijima.net/api/forecast?city=460010','kagoshima'); //鹿児島
