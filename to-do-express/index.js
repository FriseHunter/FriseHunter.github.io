const express = require('express')//library
const app = express(); //application
const swig = require('swig');
const bodyParser = require('body-parser');//process post/get data
const expressValidator = require('express-validator');//process post/get data

//MIDDLEWEARE
app.use(express.static('public'));//middleWare - promejutochnaz obrabotka
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

//CONFIG
app.engine('html', swig.renderFile);
app.set('view engine','html')
app.set('views',__dirname +'/views');
//disable CACHE
app.set('view cache',false); //express cache
swig.setDefaults({cache:false});//swing cache

//Routing -> marshrutizatiea

app.get('/register', (req,res)=>{
res.render('register-page')});
app.get('/login', (req,res)=>{
res.render('login-page')});
app.post('/user/create', (req,res)=>{
  var fullname  = req.body.fullname
  var email     = req.body.email
  var password  = req.body.password
  var cpassword = req.body.cpassword
//1)sanitization

//2)validation
if (fullname.length < 3) {
  //error
  res.render('register-page',{error:'Fullname must be at least 3 simbols'});
}
//3)save tro datebase

else if (email.length < 3) {
  //error
res.render('register-page',{error:'E - mail must be at least 3 simbols'});
}
//3)save tro datebase

else if (password.length < 3) {
  //error
  res.render('register-page',{error:'Password must be at least 3 simbols'})
}
//3)save tro datebase

else if (cpassword.length < 3) {
  //error
  res.render('register-page',{error:'Confirm Password must be at least 3 simbols'})
}
//3)save tro datebase
else {
  res.send('All good');
}
});



app.get('/', (req, res)=>{
  res.render('homepage', {name:'express'});//rendering - show this template
});



///start the server
app.listen(3000, () => {
  console.log('Express server app running!!!');
});

// /user/login <<< post();
