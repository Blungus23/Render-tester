const express = require('express');
const app = express();
const mysql = require('mysql');


//set view engine
app.set("view engine","ejs");

app.get('/', function (req, res) {
  var person =  {name:'Mark',age:24}
  var person2 = {name:'Joe',age:45}
  var person3 = {name:'Rob',age:78}
  var person4 = {name:'Mary',age:25}
  var persons = [person,person2,person3,person4]; 
  res.render('WoW',{persons});
});

var server = app.listen(5000, function () {
    console.log('Node server is running on port 5000');
});