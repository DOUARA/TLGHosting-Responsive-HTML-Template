/* Importing Gulp and its plugins */
const gulp       = require('gulp');
const browserify = require('gulp-browserify');
const concat     = require('gulp-concat');
const sass       = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const connect    = require('gulp-connect');
const gulpif     = require('gulp-if');
const uglify     = require('gulp-uglify');
const minifyHTML = require('gulp-minify-html');
const imagemin   = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg'); 



/* Declaring Variables */
let jsSources,
    sassSources,
    htmlSources,
    env,
    sassStyle,
    outputDir;
env = process.env.NODE_ENV || 'development';
if (env === 'development') {
  outputDir = 'builds/development';
  sassStyle = 'extended';
} else {
  outputDir = 'builds/production';
  sassStyle = 'compressed'
}


/* Sources' Arrays */
jsSources   = ['components/scripts/google_map.js', 
               'components/scripts/navbar_toggle.js'];
sassSources = ['components/sass/style.scss']; 
htmlSources = ['builds/development/*.html']; 

/* Minifying HTML */
gulp.task('html', function() {
  return gulp.src(htmlSources)
    .pipe(gulpif(env === 'production', minifyHTML()))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir)))
    .pipe(connect.reload());
});

/* Compressing Images */
gulp.task('images', function() {
  return gulp.src('builds/development/img/**/*.*')
    .pipe(gulpif(env === 'production', imagemin([
      imageminMozjpeg({
          quality: 90
      })
  ])))
    .pipe(gulpif(env === 'production', gulp.dest(outputDir + '/img')))
    .pipe(connect.reload());
  });


/* Concatenate JavaScript files */
gulp.task('js', function() {
    return gulp.src(jsSources)
      .pipe(concat('script.js'))
      .pipe(browserify())
      .pipe(gulpif(env === 'production', uglify()))  
      .pipe(gulp.dest(outputDir + '/js/'))
      .pipe(connect.reload());;
});

  
/* Compile SASS files */
gulp.task('sass', function () {
    return gulp.src(sassSources)
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: sassStyle})
      .on('error', sass.logError))
      .pipe(sourcemaps.write('/'))
      .pipe(gulp.dest(outputDir + '/css'))
      .pipe(connect.reload());
});

/* Watching Changes */
gulp.task('watch', function(){
  gulp.watch(htmlSources, ['html']);
  gulp.watch(jsSources, ['js']);
  gulp.watch('components/sass/*/*.scss', ['sass']);
  gulp.watch('builds/development/img/**/*.*', ['images']);
});

/* Running The Server */
gulp.task('connect', function(){
 connect.server({
   root: outputDir,
   livereload: true
 })
});

/* Running All the tasks by default */ 
gulp.task('default', ['html', 'images', 'js', 'sass', 'connect' , 'watch']);

