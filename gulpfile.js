const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

gulp.task('default', function(){
	//Gulp tasks go here
	gulp.src(["es6/**/*.js","public/es6/**/*.js"])
		.pipe(eslint())
		.pipe(eslint.format());
	//node source
	gulp.src("es6/**/*.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));

	// //brower source
	// gulp.src("public/es6/**/*.js")
	// .pipe(babel())
	// .pipe(gulp.dest("public/dist"));
	/*gulp.src("es/symbol.js")
	.pipe(babel())
	.pipe(gulp.dest("dist"));*/
});