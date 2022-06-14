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


display('https:weather.tsukumijima.net/api/forecast?city=080010','ibaragi'); //茨城
display('https:weather.tsukumijima.net/api/forecast?city=090010','tochigi'); //栃木
display('https:weather.tsukumijima.net/api/forecast?city=100010','gunnma'); //群馬
display('https:weather.tsukumijima.net/api/forecast?city=110010','saitama'); //埼玉
display('https:weather.tsukumijima.net/api/forecast?city=120010','chiba'); //千葉
display('https:weather.tsukumijima.net/api/forecast?city=130010','tokyo'); //東京
display('https:weather.tsukumijima.net/api/forecast?city=140010','kanagawa'); //神奈川
