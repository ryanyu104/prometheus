var drakovMiddleware = require('drakov').middleware
var express = require('express')

var argv = {
    sourceFiles: './md/**/*.md',
    serverPort: 3000,
}

var app = express()
drakovMiddleware.init(app, argv, function(err, middlewareFunction) {
    if (err) {
        throw err
    }
    app.use(middlewareFunction)
    app.listen(argv.serverPort)
});
