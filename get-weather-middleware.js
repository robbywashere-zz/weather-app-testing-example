const express = require('express');
const request = require('request-promise');
const reqIp = require('request-ip');

const router = express.Router();


router.get('/weather', async (req, res) => {

  let ip = reqIp.getClientIp(req);

  //if (ip === '::1') ip = '73.97.160.154'; // for imp local

  try {

    let { latitude, longitude } = (await request({ uri: `http://geoip.nekudo.com/api/${ip}`, json: true })).location;


    let { currently } = await request({ uri: `https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${latitude},${longitude}`, json: true })

    res.send(currently)

  } catch (e) {
    console.error(e);
    res.send(500, e.message);
  }


});

module.exports = router;
