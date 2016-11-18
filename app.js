var app = require('express')();

app.get('/', function(req, res) {
  res.json({message: 'Hello World/test1!'});
})

app.listen(3000);
