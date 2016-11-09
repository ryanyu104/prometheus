var drakov = require('drakov')

var argv = {
  sourceFiles: './md/test.md',
  serverPort: 3000,
}

drakov.run(argv, function(){
  console.log('success')
})
