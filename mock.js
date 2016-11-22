var drakovMiddleware = require('drakov').middleware
var express = require('express')
var app = express()

var argv = {
  sourceFiles: './md/**/*.md',
}

drakovMiddleware.init(app, argv, function(err, middlewareFunction) {
  if (err) {
    throw err
  }
  app.use(middlewareFunction)
  app.listen(3000, function() {
    console.log('success')
  })
});

