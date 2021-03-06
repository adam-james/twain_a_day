var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.use('*', function(req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 3000, function() {
  console.log('server up')
});
