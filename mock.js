var drakov = require('drakov')
var watcher = require('drakov/lib/watcher')

var options  = {
  sourceFiles: './api/**/*.md',
  serverPort: 3000,
  watch: true,
  discover: false,
}

drakov.run(options, function(err){
  watcher(options)
})
