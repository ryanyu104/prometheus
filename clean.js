const del = require('del')

const htmlPath = require('./config').base.htmlPath

module.exports = function clean() {
  del(htmlPath).then(paths => {
    console.log(paths)
  })
}
