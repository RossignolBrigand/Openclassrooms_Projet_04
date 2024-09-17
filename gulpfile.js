const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

gulp.task("styles", function() {
    return gulp.src('./public/assets/*.css')
    .pipe(concat('combined.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/assets/dist'));
});

gulp.task('scripts', function() {
    return gulp.src('./public/assets/*.js')
    .pipe(concat('combined.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/dist'));
});

gulp.task("default", gulp.parallel("styles", "scripts"));