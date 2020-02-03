var express = require('express');
var app     = express();

app.get('/', function( req, res ){
  res.send('Hello World!');
});

app.listen( 2000, function(){
  console.log('Running on port 2000');
});
