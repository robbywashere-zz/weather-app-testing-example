const express = require('express');

const dotenv = require('dotenv');

const request = require('request-promise');

const reqIp = require('request-ip');

const weather = require('./get-weather-middleware');

dotenv.config();

let app = express();

app.use(weather);

app.listen(8080)

// http://geoip.nekudo.com/api/
// response {"city":"Seattle","country":{"name":"United States","code":"US"},"location":{"accuracy_radius":1,"latitude":47.6847,"longitude":-122.3848,"time_zone":"America\/Los_Angeles"},"ip":"73.97.160.154"}




/* {
  "latitude": 37.8267,
  "longitude": -122.4233,
  "timezone": "America/Los_Angeles",
  "offset": -7,
  "currently": {
    "time": 1498846798,
    "summary": "Partly Cloudy",
    "icon": "partly-cloudy-day",
    "nearestStormDistance": 0,
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 59.45,
    "apparentTemperature": 59.45,
    "dewPoint": 53.16,
    "humidity": 0.8,
    "windSpeed": 6.31,
    "windGust": 9.68,
    "windBearing": 230,
    "visibility": 10,
    "cloudCover": 0.45,
    "pressure": 1014.45,
    "ozone": 304.95,
    "uvIndex": 6
  },

  }
  */

