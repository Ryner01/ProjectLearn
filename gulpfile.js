var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var uglify = require('gulp-uglify');
livereload = require('gulp-livereload');

gulp.task('less', function () {
  return gulp.src('./*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});
gulp.task('js',function(){
	return gulp.src('./js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist'))
		.pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./*.less', ['less']);
  gulp.watch('./js/*.js',['js']);
});	