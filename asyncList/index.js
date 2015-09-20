var express = require('express');
var async = require('async');

var app = express();

app.get('/', function(req, res){
  var urls = ['dianna.github.io','www.amazon.com','www.github.com','www.linkedin.com','www.hired.com','www.reddit.com','www.stackoverflow.com','www.angel.co/jobs','www.google.com'];
  var results = [];
  var asyncTasks = [];

  // Add request functions for each url to asyncTask list

  // After all asyncTasks are complete, return result order
})

var server = app.listen(3030, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('App is listening on:%s:%s',host,port);
});
