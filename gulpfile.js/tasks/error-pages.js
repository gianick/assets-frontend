'use strict';

var gulp = require('gulp'),
    replace = require('gulp-replace'),
    config = require('../config').errorPages;

gulp.task('error-pages', function() {
  var env = global.runmode;

  gulp.src(config.src)
      .pipe(replace('{{ assetsPath }}', config[env].assetsPath))
      .pipe(gulp.dest(config[env].dest));
});