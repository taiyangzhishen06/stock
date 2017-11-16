var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var autocomplete = require('./routes/AutoComplete');
var stock = require('./routes/Stock');
var price = require('./routes/Price');
var sma = require('./routes/SMA');
var ema = require('./routes/EMA');
var stoch = require('./routes/STOCH');
var rsi = require('./routes/RSI');
var adx = require('./routes/ADX');
var cci = require('./routes/CCI');
var bbands = require('./routes/BBANDS');
var macd = require('./routes/MACD');
var news = require('./routes/News');

var app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/AutoComplete', autocomplete);
app.use('/Stock', stock);
app.use('/Price', price);
app.use('/SMA', sma);
app.use('/EMA', ema);
app.use('/STOCH', stoch);
app.use('/RSI', rsi);
app.use('/ADX', adx);
app.use('/CCI', cci);
app.use('/BBANDS', bbands);
app.use('/MACD', macd);
app.use('/News', news);

app.listen(8080);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
