const express = require('express') //library
const app = express(); //application
const swig = require('swig');
const bodyParser = require('body-parser'); //process post/get data
const expressValidator = require('express-validator'); //process post/get data

//MIDDLEWEARE
app.use(express.static('public')); //middleWare - promejutochnaz obrabotka
app.use(bodyParser.urlencoded({
     extended: false
}));
app.use(expressValidator());

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

app.get('/register', (req, res) => {
     res.render('register-page')
});
app.get('/login', (req, res) => {
     res.render('login-page')
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
               // console.log(result.array()[0].param);
               // console.log(result.array()[0].msg);
               res.render('register-page', {
                    error: result.array()[0].msg
               });
          } else res.send('All goods!!!');
     });
});
//USER LOGIN********************************************************************

// app.post('/user/login', (req, res) => {//не работает!!!
//
//      req.assert('log-fullname', 'Fullname is required').notEmpty();
//      req.assert('log-fullname', '5 to 25 characters required').len(5, 25);
//      req.assert('log-password', '6 to 20 characters required').len(6, 20);
//
//
//      req.getValidationResult().then(function(myresult) {
//
//           console.log(myresult.isEmpty());
//           if (!myresult.isEmpty()) {
//                console.log(myresult.array()[0].param);
//                console.log(myresult.array()[0].msg);
//                res.render('login-page', {
//                     logerror: myresult.array()[0].msg
//                });
//           } else res.send('All goods!!!');
//      });
// });
// app.post('/user/create', (req, res) => {
// var fullname  = req.body.fullname
// var email     = req.body.email
// var password  = req.body.password
// var cpassword = req.body.cpassword
//1)sanitization
// 2)validation
// if (fullname.length < 3) {
//      //error
//      res.render('register-page', {
//           error: 'Fullname must be at least 3 simbols'
//      });
// } else if (email.length < 3) {
//      //error
//      res.render('register-page', {
//           error: 'E - mail must be at least 3 simbols'
//      });
// } else if (password.length < 3) {
//      //error
//      res.render('register-page', {
//           error: 'Password must be at least 3 simbols'
//      })
// } else if (cpassword.length < 3) {
//      //error
//      res.render('register-page', {
//           error: 'Confirm Password must be at least 3 simbols'
//      })
// } else {
//      res.send('All good');
// }
// )};

app.get('/', (req, res) => {
     res.render('homepage', {
          name: 'express'
     }); //rendering - show this template
});



///start the server
app.listen(3000, () => {
     console.log('Express server app running!!!');
});

// /user/login <<< post();
