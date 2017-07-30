var express = require('express')
const functions = require('firebase-functions');
var app = express();
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var parser = require('xml2json');

exports.indeed = functions.https.onRequest((req, res) =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(express.static(__dirname + '/dist'));

    cors(req, res, () => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    });

    app.get("/indeed/", (req, response) => {
        request(`http://api.indeed.com/ads/apisearch?publisher=${functions.config().indeed.key}&q=${req.query.keyword}&l=${req.query.location}&sort=&radius=&st=&jt=&start=&limit=100&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Chrome/31.0.1650.63&v=2`, (err, res, body) => {
        res.send(parser.toJson(body))

    })
});

 module.exports = app;


})
