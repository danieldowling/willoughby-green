var express = require('express')
const functions = require('firebase-functions');
var app = express();
var http = require('http');
var https = require('https');
var cors = require('cors');


var jobFn = app.get((req, response) => {
  request(`http://api.indeed.com/ads/apisearch?publisher=${functions.config().indeed.key}&q=${req.query.keyword}&l=${req.query.location}&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome/31.0.1650.63&v=2`, (err, res, body) => {
    response.send(parser.toJson(body))
    console.log('body:', parser.toJson(body));
  })
})






//CORS & CloudFunction
// exports.indeed = functions.https.onRequest((req, res) => {
//   var corsFn = cors();
//   corsFn(req, res, function() {
//     jobFn(req, res);
//   })
// })



// exports.indeed = functions.https.onRequest((req, res) =>{
//   app.use(cors((req, res, () => {
//       app.get("/indeed/", (req, response) => {
//         request(`http://api.indeed.com/ads/apisearch?publisher=${functions.config().indeed.key}&q=${req.query.keyword}&l=${req.query.location}&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome/31.0.1650.63&v=2`, (err, res, body) => {
//         res.send(body)
//       })
//     });
//   })))
// })
