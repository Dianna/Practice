var express = require('express');
var async = require('async');
var request = require('request');

var app = express();

app.get('/', function(req, res){
  var urls = ['dianna.github.io','www.amazon.com','www.github.com','www.linkedin.com','www.hired.com','www.reddit.com','www.stackoverflow.com','www.angel.co/jobs','www.google.com'];
  var results = [];
  var asyncTasks = [];
  // Add request functions for each url to asyncTask list
  urls.forEach(function(url){
    asyncTasks.push(
      function(cb){
        request('http://'+url, function(err, resp, body){
          if (err){ console.log('ERROR: ', err); }
          results.push(resp.socket._host);
          cb();
        });
      }
    );
  });
  // Execute asyncTasks, return result order on completion
  async.parallel(asyncTasks, function(){
    res.send(results);
  });
});

var server = app.listen(3030, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('App is listening on:%s:%s',host,port);
});
