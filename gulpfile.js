var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/'));
});

const minify = require('gulp-minify');

gulp.task('compress', function() {
    gulp.src(['./js/*.js'])
        .pipe(minify())
        .pipe(gulp.dest('./dist'))
});