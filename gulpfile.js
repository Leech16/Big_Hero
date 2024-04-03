const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle:'compressed' }))
    .pipe(gulp.dest('./dist/css'));
}

function pictures(){
    return gulp.src('./src/pictures/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/pictures'));
}

exports.default = gulp.parallel(styles,pictures);

exports.watch = function (){
    gulp.watch('./src/styles/*.scss',gulp.parallel(styles))
}