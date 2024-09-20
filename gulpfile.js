const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");

gulp.task("styles", function() {
    return gulp.src('./assets/css/*.css')
    .pipe(concat('combined.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('scripts', function() {
    return gulp.src('./assets/js/*.js')
    .pipe(concat('combined.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});

gulp.task("default", gulp.parallel("styles", "scripts"));