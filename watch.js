const gulp = require('gulp')
const aglio = require('gulp-aglio')
const gutil = require('gulp-util')

const options = require('./config').base
const render = require('./render')

gulp.watch(options.apiFiles)
  .on('change', function(path, stats) {
    gutil.log(`${path} changed`)
    render(path)()
  })
  .on('add', function(path, stats) {
    gutil.log(`${path} added`)
    render(path)()
  })
