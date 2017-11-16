var http = require("http");
var https = require("https");
exports.getJSON = function(options, flag, onResult)
{
    var port = (flag) ? http : https;
    var req = port.request(options, function(res)
    {
        var output = '';
        res.on('data', function (chunk) {
            output += chunk;
        });

        res.on('end', function() {
            try {
                var obj = JSON.parse(output);
            }
            catch (e){
                console.log("error");
            }
            onResult(res.statusCode, obj);

        });
    });

    // req.on('error', function(err) {
    //     res.send('error: ' + err.message);
    // });

    req.end();
};