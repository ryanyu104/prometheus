const gulp = require('gulp')

const render = require('./render')
const mock = require('./mock')
const clean = require('./clean')
const options = require('./config').base

require('./watch')

gulp.task('default', gulp.parallel(mock, render(options.apiFiles)))
gulp.task('mock', mock)
gulp.task('render', render(options.apiFiles))
gulp.task('clean', clean)
