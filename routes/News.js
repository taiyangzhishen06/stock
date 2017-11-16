var express = require('express');
var router = express.Router();
var https = require("https");
var parseString = require('xml2js').parseString;
router.get('/', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    var url = "https://seekingalpha.com/api/sa/combined/" + req.query.symbol + ".xml";
    xmlToJson(url, function(err, data) {
        if (err) {
            return console.err(err);
        }
        res.send(JSON.stringify(data, null, 2));
    });
});

function xmlToJson(url, callback) {
    var req = https.get(url, function(res) {
        var xml = '';

        res.on('data', function(chunk) {
            xml += chunk;
        });

        res.on('error', function(e) {
            callback(e, null);
        });

        res.on('timeout', function(e) {
            callback(e, null);
        });

        res.on('end', function() {
            parseString(xml, function(err, result) {
                callback(null, result);
            });
        });
    });
}

module.exports = router;