var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieMiddleware = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var servRouter = require('./routes/serv');
var resRouter = require('./routes/res');
var subsRouter = require('./routes/subs');
var contactRouter = require('./routes/contact');
var clientesRouter = require('./routes/cliente');
var mailsenderRouter = require('./routes/mailsender');


const bodyParser = require("body-parser");
const cors = require("cors");

//var CentralRouter = require('./routes/datos.routes');


var app = express();

const db = require("./models");
db.sequelize.sync();


const nodb = require("./collections");
var corsOptions = {origin: "http://localhost:4200"};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json()); 

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({​​​​​​​​extended: true}​​​​​​​​));
app.use(bodyParser.urlencoded({extended:true}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieMiddleware());
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/res', resRouter);
app.use('/serv', servRouter);
app.use('/subs', subsRouter);
app.use('/contact', contactRouter);
app.use('/cliente',clientesRouter);
app.use('/mailsender', mailsenderRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
