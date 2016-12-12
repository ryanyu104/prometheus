const express = require('express')
const path = require('path')
const restc = require('restc')
require('colors')

const drakovPath = './node_modules/drakov/lib'
const logger = require(`${drakovPath}/logger`)
const requestUtils = require(`${drakovPath}/middleware/request`)
const setup = require(`${drakovPath}/setup`)
const middleware = require('drakov').middleware

var server = null

exports.run = function(argv, cb) {

  logger.setStealthMode(argv.stealthmode)

  console.log('   DRAKOV STARTED   '.green.bold.inverse)

  var app = express()

  // REQUEST MIDDLEWARE
  // TODO configurable
  app.use(requestUtils.logger)
  app.use(requestUtils.getBody)
  app.use('/api', restc.express())

  // SETUP RESPONSE MIDDLEWARE
  argv.drakovHeader = true
  middleware.init(app, argv, function(err, middlewareFunction) {
    if (err) {
      throw err
    }

    var discoverabilityModule

    app.use(middlewareFunction)
    server = setup.startServer(argv, app, cb)
    if (argv.discover && typeof argv.discover === 'string') {
      discoverabilityModule = require(argv.discover)
    } else {
      app.set('views', path.join(__dirname, '..', 'views'))
      app.set('view engine', 'jade')
      discoverabilityModule = require(`${drakovPath}/middleware/discover`)
    }
    if (argv.discover) {
      app.get('/drakov', discoverabilityModule(argv))
    }
  })
}

exports.stop = function(cb) {
  var runCb = function() {
    if (cb) {
      cb()
    }
  }
  try {
    server.close(function() {
      console.log('   DRAKOV STOPPED   '.red.bold.inverse)
      runCb()
    })
  } catch (e) {
    runCb()
  }
}
