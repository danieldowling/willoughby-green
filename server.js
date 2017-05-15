require('dotenv').config()
var express = require('express')
var path = require('path');
var parser = require('xml2json')
var app = express()
var bodyParser = require('body-parser');
var request = require('request')
var http = require('http')
var https = require('https')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname));

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });

app.get('/indeed',(req, res) => {
  request(`http://api.indeed.com/ads/apisearch?publisher=${process.env.INDEED_ID}&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2`, (err, res, body) => {
    console.log('error:', err); // Print the error if one occurred
    console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
    console.log('body:', parser.toJson(body));
  })
})

//});

app.listen(8080), () => {
    console.log('server running..')
}

module.exports = app;
