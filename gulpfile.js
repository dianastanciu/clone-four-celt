let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let cleanJS = require('gulp-minify');

sass.compiler = require('node-sass');

gulp.task('sass', function() {
  return gulp.src('./assets/src/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/src/css'));
});

gulp.task('prefix-and-clean', function() {
  return gulp.src('./assets/src/css/*.css')
  .pipe(autoprefixer({overrideBrowsersList: ['IE 6', 'Chrome 9', 'Firefox 14']}))
  .pipe(cleanCSS())
  .pipe(gulp.dest('assets/src/css'));
});

gulp.task('bundle-css', function() {
  return gulp.src([
    'assets/src/lib/bootstrap/css/bootstrap.min.css',
    'assets/src/lib/fontawesome/css/fontawesome.css',
    'assets/src/lib/owl-carousel/css/owl.carousel.min.css',
    'assets/src/lib/owl-carousel/css/owl.theme.default.min.css',
    'assets/src/css/main.css',
  ])
    .pipe(concat('stylesheet.css'))
    .pipe(cleanCSS('stylesheet.css'))
    .pipe(gulp.dest('assets/dist/css'))
});

gulp.task('bundle-js', function() {
  return gulp.src([
    'assets/src/lib/jquery/jquery.min.js',
    'assets/src/lib/bootstrap/js/bootstrap.min.js',
    'assets/src/lib/owl-carousel/js/owl.carousel.min.js',
    'assets/src/js/index.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(cleanJS())
    .pipe(gulp.dest('assets/dist/js'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/src/scss/**/*.scss', gulp.series('sass', 'prefix-and-clean'));
});
gulp.task('bundle', gulp.series('bundle-css', 'bundle-js'));