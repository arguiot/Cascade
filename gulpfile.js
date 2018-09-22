const gulp = require("gulp")
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");

gulp.task("default", () => {
	gulp.src("src/base.js")
		.pipe(rigger())
		.pipe(rename({
			basename: "cascade"
		}))
		.pipe(gulp.dest("dist"));
})
