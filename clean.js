const htmlPath = 'html/'
const fs = require('fs')
const dirs = fs.readdirSync(htmlPath)
const del = require('del')

del(['dirs'])
