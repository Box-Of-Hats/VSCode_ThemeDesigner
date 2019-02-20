const gulp = require("gulp");
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');

const style = () => {
    // Compile less to css and minify
    return gulp.src('./src/style/App.less')
        .pipe(less())
        .pipe(gulp.dest('./src/style/'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./src/style'))
}

const watch = () => {
    gulp.watch('./src/**/*.less', style);
}

exports.style = style;
exports.watch = watch;
exports.default = style;