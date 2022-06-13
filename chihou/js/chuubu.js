fetch('https:weather.tsukumijima.net/api/forecast?city=400040')
  .then(response =>response.json())
  .then(json => console.log(json.forecasts[0].chanceOfRain.T18_24))






