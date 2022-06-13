
var request = new XMLHttpRequest();

request.open('GET', 'https:weather.tsukumijima.net/api/forecast?city=400040&chanceOfRain=T06_12', true);
request.responseType = 'json';

request.onload = function() {
  var data = this.response;
  console.log(data);
};

request.send();








