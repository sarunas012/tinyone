const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('test', function(done){
    console.log('gulp is working');
    done()
})


gulp.task('sass', function () {
    return gulp.src('./src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(autoprefixer({                    // webkit compaileris
            browsers: ['last 2 versions'],
            cascade: false
    }))
        .pipe(gulp.dest('./dist/css')); // kur padesim
});

gulp.task('start', function () {
    gulp.watch('./src/**/*.scss', gulp.series('sass'));
  });