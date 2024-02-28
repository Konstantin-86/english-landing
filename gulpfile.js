const gulp = require("gulp");
const pages = require("gulp-gh-pages");

// Tasks
require("./gulp/dev.js");
require("./gulp/docs.js");

gulp.task(
  "default",
  gulp.series(
    "clean:dev",
    gulp.parallel(
      "html:dev",
      "sass:dev",
      "images:dev",
      "fonts:dev",
      "files:dev",
      "js:dev"
    ),
    gulp.parallel("server:dev", "watch:dev")
  )
);

gulp.task(
  "docs",
  gulp.series(
    "clean:docs",
    gulp.parallel(
      "html:docs",
      "sass:docs",
      "images:docs",
      "fonts:docs",
      "files:docs",
      "js:docs"
    ),
    gulp.parallel("server:docs")
  )
);

// Deploy
/* gulp.task("deploy", function () {
  return ghPages.publish("dist", {
    repo: "https://github.com/Konstantin-86/english-landing",
  });
}); */

gulp.task("deploy", function () {
  return gulp.src("./build/**/*").pipe(pages());
});
