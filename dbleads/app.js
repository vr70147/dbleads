const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
mongoose.Promise = global.Promise;
const http = require('http');
const async = require('async');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const auth = require('./auth/passport');
// const User = require('./models/user');
// const expressValidator = require('express-validator');
const users = require('./routes/users');
const routes = require('./routes/index');
const mongoUrl = 'mongodb://vr70147:pb63xbcx@ds137740.mlab.com:37740/tasks';

const app = express();

// Data base connection
mongoose.connect(mongoUrl, err => { err ? console.log('could not connect server') : app.listen('3000', () => { console.log('SERVER UP')})
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', routes);
app.use('/users', users);