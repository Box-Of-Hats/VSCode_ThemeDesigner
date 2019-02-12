let gulp = require("gulp");
let less = require('gulp-less');
let cleanCSS = require('gulp-clean-css');

gulp.task("compile-less", () => {
    return gulp.src('./src/style/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/style/'))
});

gulp.task("minify-css", () => {
    return gulp.src('./src/style/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./src/style'));
});

gulp.task('watch-css', function () {
    gulp.watch('src/style/*.less', gulp.series(['compile-less', 'minify-css']))});

gulp.task("default", gulp.series(['compile-less', "minify-css"]));