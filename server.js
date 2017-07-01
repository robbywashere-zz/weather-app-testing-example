const express = require('express');

const dotenv = require('dotenv');

const request = require('request-promise');

const reqIp = require('request-ip');

const weather = require('./get-weather-middleware');

dotenv.config();

let app = express();

app.use(weather);

app.listen(8080);
