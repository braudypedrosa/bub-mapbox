const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const gulpIf = require('gulp-if');
const yargs = require('yargs');
const zip = require('gulp-zip');

const argv = yargs.argv;
const isProduction = argv.prod;

function scripts() {
  return gulp.src('assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundled-main.css'))
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulp.dest('dist/css'));
}


function styles() {
  return gulp.src('assets/js/*.js')
    .pipe(concat('bundled-main.js'))
    .pipe(gulpIf(isProduction, terser()))
    .pipe(gulp.dest('dist/js'));
}

function zipFiles() {
  return gulp.src([
      '**/*', 
      '!node_modules/**', 
      '!bundled/**', 
      '!dist/**',
      '!gulpfile.js',
      '!package-lock.json'
    ])
    .pipe(zip('bub-mapbox.zip'))
    .pipe(gulp.dest('bundled'));
}

function watchFiles() {
  gulp.watch('assets/scss/*.scss', scripts);
  gulp.watch('assets/js/*.js', styles);
}

const build = gulp.parallel(scripts, styles);
const watch = gulp.series(build, watchFiles);
gulp.task('zip', gulp.series(build, zipFiles));

gulp.task('build', build);
gulp.task('watch', watch);
