'use strict';
	
	var gulp = require('gulp'),
		webserver = require('gulp-webserver'),
		concat = require('gulp-concat'),
		csso = require('gulp-csso');

	
	gulp.task('js', function() {
	  gulp.src('src/app/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('live/app/'))
	});

	gulp.task('html', function() {
		gulp.src('src/**/*.html')
		.pipe(gulp.dest('live/'))
	});

	gulp.task('css', function () {
		gulp.src('src/css/*')
		.pipe(gulp.dest('live/css/'));
	});
	
	gulp.task('watch', function() {
		gulp.watch('src/app/**/*.js', ['js']);
		gulp.watch('src/css/*.css', ['css']);
		gulp.watch('src/**/*.html', ['html']);
	});

	gulp.task('libs', function() {
		gulp.src('src/libs/*.js')
		.pipe(gulp.dest('./live/libs/angular/'));
	});
	
	gulp.task('webserver', function() {
		gulp.src('live/')
			.pipe(webserver({
			livereload: true,
			open: true
		}));
	});
	
	gulp.task('default', [
		'js',
		'css',
		'libs',
		'html',
		'webserver',
		'watch'
	]);