const gulp = require('gulp')
require('colors')

const drakov = require('./drakov')

// Save these for replay later
let CACHED_ARGV = []

let RESTART_COUNT = 0

const changeHandler = function(filePath) {
  ++RESTART_COUNT
  console.log('[CHANGE]'.white, filePath.green, ('Restarting ' + RESTART_COUNT).blue)
  drakov.stop(function(){
    drakov.run(CACHED_ARGV)
  })
}

module.exports = function(argv) {
  if (!argv.watch) {
    return
  }

  console.log(' FILE SPY '.grey.inverse + '  ACTIVE  '.green.inverse)

  CACHED_ARGV = argv
  const sourceFiles = argv.sourceFiles

  const watcher = gulp.watch(sourceFiles)
  watcher.on('change', changeHandler)
}
