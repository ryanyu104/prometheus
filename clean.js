const htmlPath = 'html/'
const fs = require('fs')
const dirs = fs.readdirSync(htmlPath)
const del = require('del')

dirs.forEach((item) => {
  del([htmlPath + item]).then(paths => {
    console.log(paths)
  })
})
