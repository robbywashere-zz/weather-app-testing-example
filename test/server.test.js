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



