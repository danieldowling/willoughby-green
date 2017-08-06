var express = require('express')
const functions = require('firebase-functions');
var app = express();
var http = require('http');
var https = require('https');
const cors = require('cors') ({
  origin: true
});


exports.indeed = functions.https.onRequest((req, res) =>{
  app.use(cors((req, res, () => {
      app.get("/indeed/", (req, response) => {
        request(`http://api.indeed.com/ads/apisearch?publisher=${functions.config().indeed.key}&q=${req.query.keyword}&l=${req.query.location}&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome/31.0.1650.63&v=2`, (err, res, body) => {
        res.send(body)
      })
    });
  })))
})
