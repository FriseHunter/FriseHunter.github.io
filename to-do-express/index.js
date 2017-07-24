const express = require('express') //library
const app = express(); //application
const swig = require('swig');
const bodyParser = require('body-parser'); //process post/get data
const expressValidator = require('express-validator'); //process post/get data
const cookieSession = require('cookie-session')
//MIDDLEWEARE
app.use(express.static('public')); //middleWare - promejutochnaz obrabotka
app.use(bodyParser.urlencoded({
      extended: false
}));
app.use(expressValidator());
app.use(cookieSession({
      name: 'todo-session',
      keys: ["sMMnLBPN9xIiyA10" /* secret keys */ ],

      // Cookie Options
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

//CONFIG
app.engine('html', swig.renderFile);
app.set('view engine', 'html')
app.set('views', __dirname + '/views');

//disable CACHE

app.set('view cache', false); //express cache
swig.setDefaults({
      cache: false
}); //swing cache

//Routing -> marshrutizatiea

app.get('/create', (req, res) => {
      res.render('create-task', {
            onLine: req.session.is_online,
            fullname: req.session.fullname
      });
});
app.get('/register', (req, res) => {
      res.render('register-page', {
            onLine: req.session.is_online,
            fullname: req.session.fullname
      });
});
app.get('/login', (req, res) => {
      res.render('login-page', {
            onLine: req.session.is_online,
            fullname: req.session.fullname
      });
});
app.get('/user/logout', (req, res) => {
      // res.session = null;
      req.session.is_online = null
      res.redirect('/');
});
app.post('/task/new', (req, res) => {
      res.send('Task was create');
});
app.get('/tasks', (req, res) => {
      res.render('all-tasks', {
            onLine: req.session.is_online,
            fullname: req.session.fullname
      });
});


//USER CRATE********************************************************************
app.post('/user/create', (req, res) => {

      req.assert('fullname', 'Fullname is required').notEmpty();
      req.assert('fullname', '5 to 25 characters required').len(5, 25);
      req.assert('email', 'Email is required').notEmpty();
      req.assert('email', 'Invalid email').isEmail();
      req.assert('password', '6 to 20 characters required').len(6, 20);
      req.assert('cpassword', 'Passwords must match').equals(req.body.password);

      req.getValidationResult().then(function(result) {

            console.log(result.isEmpty());
            if (!result.isEmpty()) {
                  res.render('register-page', {
                        error: result.array()[0].msg
                  });
            } else res.send('All goods!!!');
      });
});
//USER LOGIN********************************************************************

app.post('/user/login', (req, res) => { //не работает!!!

      var fullname = req.body.fullname;
      var email = req.body.email;
      var password = req.body.password;
      var cpassword = req.body.cpassword;

      req.assert('fullname', 'Fullname is required').notEmpty();
      req.assert('fullname', '5 to 25 characters required').len(5, 25);
      req.assert('password', '6 to 20 characters required').len(6, 20);


      req.getValidationResult().then(function(myresult) {

            console.log(myresult.isEmpty());
            if (!myresult.isEmpty()) {
                  console.log(myresult.array()[0].param);
                  console.log(myresult.array()[0].msg);
                  res.render('login-page', {
                        logerror: myresult.array()[0].msg
                  });
            } else {
                  if (
                        fullname == "admin" && password == "123456" ||
                        fullname == "admin1" && password == "1234567") {

                        req.session.is_online = true;
                        req.session.login = req.body.fullname;
                        res.redirect('/');
                  } else {
                        res.render('login-page', {error : 'Bad fullname or password'});
                  }
            }
      });
});


app.get('/', (req, res) => {
      res.render('homepage', {
            name: 'express',
            online: req.session.is_online,
            user: req.session.login
      }); //rendering - show this template
});



///start the server
app.listen(3000, () => {
      console.log('Express server app running!!!');
});

// /user/login <<< post();
