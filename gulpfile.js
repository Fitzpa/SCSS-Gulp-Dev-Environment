const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

// Compiles Sass
function style() {
  return (
    gulp
      // selects where to look for our scss files
      .src(["src/scss/*.scss"])
      // passes the file through sass compiler
      .pipe(sass().on("error", sass.logError))
      // selects where our compiled css will go
      .pipe(gulp.dest("src/css"))
      // stream changes to all browsers
      .pipe(browserSync.stream())
  );
}

//Watch and server
function watch() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch("src/scss/*.scss", style);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;
