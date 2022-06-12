var test{
  var request = new XMLHttpRequest();
     id = 010010;
     spot = 'https:weather.tsukumijima.net/api/forecast'? + city='id'? + chanceOfRain='T12_18'? + dateLabel='明日';
     request.open('GET', spot, true);
};

request.onload = function () {
      var data = this.response;
      console.log(data);
    };
    request.send();
