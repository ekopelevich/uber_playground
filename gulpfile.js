var gulp = require('gulp');
var babel = require('gulp-babel');
var browserify = require('gulp-browserify');

gulp.task('default', ['babel', /*'browserify',*/ 'watch']);

gulp.task('babel', function(){
  return gulp.src('./react/src/jsx/**/*.jsx')
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulp.dest('./react/src/javascripts'));
});

gulp.task('browserify', function(){
  return gulp.src('./react/src/js/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./react/public/javascripts'));
});

gulp.task('watch', function(){
  gulp.watch('./react/src/jsx/**/*.jsx', ['babel']);
  gulp.watch('./react/src/js/**/*.js', ['browserify']);
});
