const sinon = require('sinon');

const nock = require('nock');

const weather = require('../get-weather-middleware');

const express = require('express');

const supertest = require('supertest');

const mockApp = express();

const reqIp = require('request-ip');

const assert = require('assert');

mockApp.use(weather);

describe('server.js', ()=>{


  it ('should respond to GET /weather', (done)=>{

    process.env.DARKSKY_KEY = 'fakeapikey';

    sinon.stub(reqIp, 'getClientIp').returns('fakeip');


    nock('http://geoip.nekudo.com')
      .get('/api/fakeip')
      .reply(200, {
        location: {
          latitude: 'lat',
          longitude: 'long'
        }
      })


    nock('https://api.darksky.net')
      .get('/forecast/fakeapikey/lat,long')
      .reply(200, {
        currently: { payload: true }
      })

    supertest(mockApp)
      .get('/weather')
      .then( resp => {
        assert.deepEqual(resp.body,{ payload: true })
        done();
      })
      .catch( e => done(e));



  });






})



/*
{"time":1498847783,"summary":"Partly Cloudy","icon":"partly-cloudy-day","nearestStormDistance":607,"nearestStormBearing":180,"precipIntensity":0,"precipProbability":0,"temperature":74.5,"apparentTemperature":74.5,"dewPoint":58.15,"humidity":0.57,"windSpeed":3.22,"windGust":3.92,"windBearing":346,"visibility":10,"cloudCover":0.43,"pressure":1016.9,"ozone":310.78,"uvIndex":5}
*/
