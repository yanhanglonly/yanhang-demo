
	var gulp = require("gulp");
	var concat = require("gulp-concat");//合并
	var sass = require("gulp-sass");//编译scss文件
	var cleanCss = require("gulp-clean-css");//压缩
	var rename = require("gulp-rename");//重命名
	var uglify = require("gulp-uglify");//js压缩混淆
	var inject = require("gulp-inject");//注入
	var connect = require("gulp-connect");//服务器
	var imagemin=require("gulp-imagemin");
	var watch = require("gulp-watch");
	gulp.task("default",["sass","javascript","html","server","watch","img"]);

	gulp.task("sass",function(){
		 gulp.src("resource/**/*.scss").pipe(concat("all.scss")).pipe(sass()).pipe(cleanCss()).pipe(rename("all.min.css")).pipe(gulp.dest("./dest/css")).pipe(connect.reload());
	});

	gulp.task("javascript",function(){
		 gulp.src("resource/**/*.js").pipe(concat("all.js")).pipe(uglify()).pipe(rename("all.min.js")).pipe(gulp.dest("./dest/js")).pipe(connect.reload());
	});

	gulp.task("html",function(){
		gulp.src("resource/index.html").pipe(gulp.dest("./dest/")).pipe(inject(gulp.src(["dest/css/all.min.css","dest/js/all.min.js"]),{relative:true})).pipe(gulp.dest("dest/")).pipe(connect.reload());
	});

	gulp.task("img",function(){
		gulp.src("./resource/images/*").pipe(imagemin()).pipe(gulp.dest("./dest/images/"));
	});

	gulp.task("server",function(){
		connect.server({
			port:8888,
			root:"dest",
			livereload:true
		});
	});

	gulp.task("watch",function(){
		gulp.watch(["./resource/**/*.html"],["html"]);
		gulp.watch(["./resource/**/*.scss"],["sass"]);
		gulp.watch(["./resource/**/*.js"],["javascript"]);

		watch("./resource/images/*",function(){
			gulp.src("./resource/images/*").pipe(imagemin()).pipe(gulp.dest("./dest/images/"));
		});
	})
