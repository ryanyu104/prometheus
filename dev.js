const mdPath = 'md/'
const htmlPath = 'html/'
const fs = require('fs')
const aglio = require('aglio')
const dirs = fs.readdirSync(mdPath)
const mkdirp = require('mkdirp')
const renderTask = []

const options = {
  themeTemplate: 'default'
}

dirs.forEach((item) => {
  const inputFolder = mdPath + item
  const outFolder = htmlPath + item
  const filesArr = fs.readdirSync(inputFolder)

  makeDir(outFolder)

  filesArr.forEach((file) => {
    const fileName = file.replace('.apib', '')
    const inputFile = `${inputFolder}/${fileName}.apib`
    const outFile = `${outFolder}/${fileName}.html`
    aglio.renderFile(inputFile, outFile, options, (error) => {
      if (error) return console.log(error)
    })
  })
})

function makeDir(folderName) {
  mkdirp(folderName, (error) => {
    if (error) return console.log(error)
  })
}
