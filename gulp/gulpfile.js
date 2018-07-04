const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel')

gulp.task('babel', () =>
    gulp.src('es6.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(rename('es5.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dest'))
);

gulp.task('minify', function () {
    gulp.src('./dest/es5.js')
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('dest'));
});


gulp.task('to-css', function () {
    gulp.src('sass.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('main.css'))
        .pipe(gulp.dest('dest'));
});