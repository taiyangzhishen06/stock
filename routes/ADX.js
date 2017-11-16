var express = require('express');
var router = express.Router();
var myrequest = require('../public/javascripts/getJSON.js');
router.get('/', function (req, res) {
    //console.log(req);
    // console.log(req.url);
    // console.log(req.query.symbol);
    res.setHeader("Access-Control-Allow-Origin", "*");
    var path = "/query?function=ADX&symbol=" + req.query.symbol + "&interval=daily&time_period=10&apikey=5FEUWD4ALSTGHNN9";
    var options = {
        host: 'www.alphavantage.co',
        port: 443,
        path: path,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    myrequest.getJSON(options, false, function(statusCode, result){
        //cconsole.log(result);
        res.send(result);
    });
});

module.exports = router;