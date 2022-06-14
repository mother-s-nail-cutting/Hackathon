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
var area = new Array();
area= ['north','east','south','center'];
display('https:weather.tsukumijima.net/api/forecast?city=011000',area[0]); //道北
display('https:weather.tsukumijima.net/api/forecast?city=013010',area[1]); //道東
display('https:weather.tsukumijima.net/api/forecast?city=015010',area[2]); //道南
display('https:weather.tsukumijima.net/api/forecast?city=016010',area[3]); //道央

for(var i = 0;i<4;i++){
  if(document.getElementById(area[i]).value == 'rain')
  document.getElementById(area[i]).innerHTML= "雨です,降水確率:" + date;
}
