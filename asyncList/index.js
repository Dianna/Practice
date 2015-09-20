var express = require('express');
var async = require('async');

var app = express();

var server = app.listen(3030, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('App is listening on:%s:%s',host,port);
});
