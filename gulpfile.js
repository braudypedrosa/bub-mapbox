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

function public_scripts() {
  return gulp.src('assets/scss/public/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundled-main.css'))
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulp.dest('dist/css/public'));
}


function public_styles() {
  return gulp.src('assets/js/public/*.js')
    .pipe(concat('bundled-main.js'))
    .pipe(gulpIf(isProduction, terser()))
    .pipe(gulp.dest('dist/js/public'));
}

function admin_scripts() {
  return gulp.src('assets/scss/admin/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundled-main.css'))
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulp.dest('dist/css/admin'));
}


function admin_styles() {
  return gulp.src('assets/js/admin/*.js')
    .pipe(concat('bundled-main.js'))
    .pipe(gulpIf(isProduction, terser()))
    .pipe(gulp.dest('dist/js/admin'));
}

function zipFiles() {
  return gulp.src([
      '**/*',
      '!node_modules/**', // Ignore everything in node_modules
      'node_modules/bootstrap/dist/**', // Except for Bootstrap
      '!bundled/**',
      'dist/**',
      '!gulpfile.js',
      '!package-lock.json'
    ], { base: '.' }) // Maintain the directory structure
    .pipe(zip('bub-mapbox.zip'))
    .pipe(gulp.dest('bundled'));
}

function watchFiles() {
  gulp.watch('assets/scss/public/*.scss', public_scripts);
  gulp.watch('assets/js/public/*.js', public_styles);
  gulp.watch('assets/scss/admin/*.scss', admin_scripts);
  gulp.watch('assets/js/admin/*.js', admin_styles);
}

const build = gulp.parallel(public_scripts, public_styles, admin_scripts, admin_styles);
const watch = gulp.series(build, watchFiles);
gulp.task('zip', gulp.series(build, zipFiles));

gulp.task('build', build);
gulp.task('watch', watch);
