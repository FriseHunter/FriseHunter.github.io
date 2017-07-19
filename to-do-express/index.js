const express = require('express')//library
const app = express(); //application
const swig = require('swig')

app.use(express.static('public'));//middleWare - promejutochnaz obrabotka


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
app.get('/task', (req,res)=>{
res.render('task-page')});



app.get('/', (req, res)=>{
  res.render('homepage', {name:'express'});//rendering - show this template
});



///start the server
app.listen(3000, () => {
  console.log('Express server app running!!!');
});
