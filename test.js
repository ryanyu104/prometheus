const mdPath = 'md/'
const fs = require('fs')
const dirs = fs.readdirSync(mdPath)
var protagonist = require('protagonist')

dirs.forEach((item) => {
  const inputFolder = mdPath + item
  const filesArr = fs.readdirSync(inputFolder)
  filesArr.forEach((file) => {
    protagonist.parse(file, function(error, result) {
      if (error) {
        console.log(error)
        return
      }
      console.log(result)
    })
  })
})
