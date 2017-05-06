require('dotenv').config()
var express = require('express');
// var path = require('path');

var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(__dirname));

const INDEED_ID = process.env.INDEED_ID
var indeed = require('indeed-api').getInstance(INDEED_ID)

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/indeed', function (req, res) {
    // res.json({'name':'kyle','indeed_id':INDEED_ID})
    indeed.JobSearch()
        .Radius(20)
        .WhereLocation({
            city: 'Stevens Point',
            state: 'WI'
        })
        .Limit(2)
        .UserIP('108.250.225.232')
        .UserAgent('Chrome/31.0.1650.63 Safari/537.36')
        .Search(
            function (results) {
                // do something with the success results 
                console.log('results');
            })
});

app.listen(8080, () => {
    console.log('server running..')
})

module.exports = app;