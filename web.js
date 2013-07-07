var express = require('express');
var fs = require('fs');
var infile = "index.html";
var line = fs.readFileSync(infile).toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(line);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

