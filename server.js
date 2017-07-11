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

app.use(express.static(__dirname + '/dist'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//http request to get indeed job data
app.get('/indeed/',(req, response) => {
  request(`http://api.indeed.com/ads/apisearch?publisher=${functions.config().indeed.key}&q=${req.query.keyword}&l=${req.query.location}&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome/31.0.1650.63&v=2`, (err, res, body) => {
    response.send(parser.toJson(body))
    console.log('body:', parser.toJson(body));
  })

})

app.listen(process.env.PORT || 8080), () => {
    console.log('server running..')
}

module.exports = app;
