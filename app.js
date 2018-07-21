const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
mongoose.Promise = global.Promise;
const http = require('http');
const async = require('async');
const cors = require('cors');
const passport = require('passport');
const path = require('path');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/user');
const expressValidator = require('express-validator');
const users = require('./server/routes/users');
const routes = require('./server/routes/index');
const mongoUrl = 'mongodb://vr70147:pb63xbcx@ds137740.mlab.com:37740/tasks';
const app = express();
const server = http.createServer(app);

// Data base connectionnn
mongoose.connect(mongoUrl, { useNewUrlParser: true }, err => { err ? console.log('could not connect server') : server.listen('3000', () => { console.log('SERVER UP')})
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist' )));

app.use(session({
    secret: "dbleadsthecoolestleadssystem",
    resave: false,
    saveUninitialized: false,
    name: 'user_cook',
    cookie: {
      httpOnly: false,
      maxAge: 10000 * 600 * 5
    },
    store: new MongoStore({
      url: mongoUrl
    })
  }));

  require('./server/passport/config')(passport);
  app.use(passport.initialize());
  app.use(passport.session());

app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
        , root    = namespace.shift()
        , formParam = root;

      while(namespace.length) {
        formParam += '[' + namespace.shift() + ']';
      }
      return {
        param : formParam,
        msg   : msg,
        value : value
      };
    }
  }));

app.use('/', routes);
app.use('/users', users);

app.get('*', ( req, res ) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});
