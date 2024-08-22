const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const gulpIf = require('gulp-if');
const yargs = require('yargs');
const zip = require('gulp-zip');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

const argv = yargs.argv;
const isProduction = argv.prod;

function public_styles() {
  return gulp.src('assets/scss/public-bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundled-main.css'))
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulp.dest('dist/css/public'));
}

function public_scripts() {
  return gulp.src('assets/js/public-bundle.js')
    .pipe(webpack({
      mode: isProduction ? 'production' : 'development',
      output: {
        filename: 'bundled-main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devtool: !isProduction ? 'inline-source-map' : false,
    }))
    .pipe(gulpIf(isProduction, terser()))
    .pipe(gulp.dest('dist/js/public'));
}

function admin_styles() {
  return gulp.src('assets/scss/admin-bundle.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('bundled-main.css'))
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulp.dest('dist/css/admin'));
}

function admin_scripts() {
  return gulp.src('assets/js/admin-bundle.js')
    .pipe(webpack({
      mode: isProduction ? 'production' : 'development',
      output: {
        filename: 'bundled-main.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      },
      devtool: !isProduction ? 'inline-source-map' : false,
    }))
    .pipe(gulpIf(isProduction, terser()))
    .pipe(gulp.dest('dist/js/admin'));
}

function zipFiles() {
  return gulp.src([
      '**/*',
      '!node_modules/**',
      'node_modules/bootstrap/dist/**',
      '!bundled/**',
      'dist/**',
      '!gulpfile.js',
      '!package-lock.json'
    ], { base: '.' })
    .pipe(zip('bub-mapbox.zip'))
    .pipe(gulp.dest('bundled'));
}

function watchFiles() {
  gulp.watch('assets/scss/public/*.scss', public_styles);
  gulp.watch('assets/js/public/*.js', public_scripts);
  gulp.watch('assets/scss/admin/*.scss', admin_styles);
  gulp.watch('assets/js/admin/*.js', admin_scripts);
}

const build = gulp.parallel(public_styles, public_scripts, admin_styles, admin_scripts);
const watch = gulp.series(build, watchFiles);
gulp.task('zip', gulp.series(build, zipFiles));

gulp.task('build', build);
gulp.task('watch', watch);
