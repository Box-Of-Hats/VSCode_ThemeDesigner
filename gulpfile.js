let gulp = require("gulp");
let less = require('gulp-less');

gulp.task("compile-less", function() {
    return gulp.src('./src/style/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/style/'))
});


gulp.task("default", gulp.parallel('compile-less'));