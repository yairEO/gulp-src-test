var gulp   = require('gulp'),
    concat = require('gulp-concat');


gulp.task('default', function(){
    gulp.src('./files/*.txt')
        .pipe(concat('result_here.txt'))
        .pipe(gulp.dest('.'));
});