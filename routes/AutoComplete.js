var express = require('express');
var router = express.Router();
var http = require('http');
var myrequest = require('../public/javascripts/getJSON.js');

/* GET users listing. */
router.get('/', function (req, res) {
    //console.log(req);
    // console.log(req.url);
    // console.log(req.query.symbol);
    res.setHeader("Access-Control-Allow-Origin", "*");
    var path = "/MODApis/Api/v2/Lookup/json?input=" + req.query.symbol;
    var options = {
        host: 'dev.markitondemand.com',
        port: 80,
        path: path,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    myrequest.getJSON(options, true, function(statusCode, result){
        res.send(result);
    });
});

module.exports = router;
