var concatCss = require('gulp-concat-css');
var concatJs = require('gulp-concat');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge-stream');
var gulp = require('gulp');

gulp.task('production_css', function () {
    var scssStream = gulp.src([
        'public_dev/scss/vendor/bootstrap-reboot.scss',
        'public_dev/scss/vendor/bootstrap-grid.scss',
        'public_dev/scss/custom/style.scss'
    ])
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(concatCss('scss-files.scss'));
    var cssStream = gulp.src([
        'public_dev/css/custom/*.css',
        'public_dev/css/vendor/*.css'
    ])
        .pipe(concatCss('css-files.css'));

    var mergedStream = merge(cssStream, scssStream)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(concatCss("style.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
    return mergedStream;
});

gulp.task('production_js', function () {
    return gulp.src([
        'public_dev/js/vendor/jquery.min.js',
        'public_dev/js/custom/script.js'
    ])
        .pipe(concatJs('script.js'))
        .pipe(gulp.dest('public/'))
        .pipe(livereload());
});

//////////////// LIVERELOAD ////////////////////////////

var livereload = require('gulp-livereload');
var http = require('http');
var st = require('st');

gulp.task('start-livereload', function (done) {
    http.createServer(
        st({path: __dirname + '/public', index: 'index.html', cache: false})
    ).listen(9999, done);
    livereload.listen();
});

//////////////// LIVERELOAD ////////////////////////////

gulp.task('html_reload', function () {
    gulp.src('public/*.html')
        .pipe(livereload());
});

gulp.task('watch', function () {
    gulp.watch('public_dev/scss/custom/*.scss', ['production_css']);
    gulp.watch('public_dev/scss/vendor/*.scss', ['production_css']);
    gulp.watch('public_dev/css/custom/*.css', ['production_css']);
    gulp.watch('public_dev/css/vendor/*.css', ['production_css']);
    gulp.watch('public_dev/js/custom/*.js', ['production_js']);
    gulp.watch('public_dev/js/vendor/*.js', ['production_js']);
    gulp.watch('public/*.html', ['html_reload']);
});


gulp.task('default', [
    'start-livereload',
    'production_css',
    'production_js',
    'watch'
]);