const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const sass = require('gulp-sass')

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './build',
  })

  gulp.watch('src/scss/*.scss', ['sass'])
  gulp.watch('build/*.html').on('change', browserSync.reload)
})

gulp.task('sass', function() {
  return gulp
    .src('src/scss/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])
