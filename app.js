var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var agentRouter = require('./routes/agent');
var intentRouter = require('./routes/intent');
var phraseRouter = require('./routes/phrase');
var responseRouter = require('./routes/response');
var speechRouter = require('./routes/speech');
var temperatureRouter = require('./routes/crawler/temperature.js');
var socialUserRouter = require('./routes/social_user');
var friendRouter = require('./routes/friend');
var tokenRouter = require('./routes/token');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var corsOptions = {
  origin: '*',
  credentials: true };

// Cors
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Route
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/agent', agentRouter);
app.use('/intent', intentRouter);
app.use('/phrase',phraseRouter);
app.use('/response',responseRouter);
app.use('/speech',speechRouter);
app.use('/temperature',temperatureRouter);
app.use('/socialuser',socialUserRouter);
app.use('/friend',friendRouter);
app.use('/token',tokenRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
