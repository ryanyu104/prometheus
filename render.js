const gulp = require('gulp')
const aglio = require('gulp-aglio')

const options = require('./config').renderOptions

function render(pattern) {
  return function renderAPI() {
    return gulp.src(pattern, { base: options.base })
      .pipe(aglio(options))
      .pipe(gulp.dest(options.dest))
  }
}

module.exports = render
