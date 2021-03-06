const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helloWorld = require('./routes/helloWorld');

const routes = [
  ['/hello-world', helloWorld],
];

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routes.forEach((route) => {
  app.use(route[0], route[1]);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  const { locals, status, render } = res;
  const { message, errorStatus } = err;

  // set locals, only providing error in development
  locals.message = message;
  locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  status(errorStatus || 500);
  render('error');
});

module.exports = app;
