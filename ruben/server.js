'use strict';
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/build'));
var server = app.listen(3000, function(){
  console.log('up on 3000');
});