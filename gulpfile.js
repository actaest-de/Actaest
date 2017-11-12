var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./scss/style.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function () {

  browserSync.init({
    server: "./"
  });

  gulp.watch("./scss/style.scss", ['sass']);
  gulp.watch("./*.html").on('change', browserSync.reload);
});