var gulp = require('gulp');
var reactEasy = require('gulp-react-easy');

gulp.task('default', ['js','w']);

gulp.task('w', function() {
  gulp.watch('./src/js/**/*', ['js']);

});

gulp.task('js', function() {
  return reactEasy({
      file: './src/js/app.jsx',
      debug: true // optional, false by default
    })
    .to('app.js')
    .pipe(gulp.dest('./dist/js/'));
});

//npm install --save-dev gulp@3.9.0 
//npm install --save-dev gulp gulp-concat gulp-rename gulp-react-easy