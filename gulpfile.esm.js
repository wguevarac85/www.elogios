const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const htmlmin = require('gulp-htmlmin');
const cssMin = require('gulp-css');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const cachebust = require('gulp-cache-bust');
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import {init as server, stream, reload} from 'browser-sync';
const plumber = require('gulp-plumber');
const php2html = require("gulp-php2html");

const production = false;
 
gulp.task('babel', () =>
    gulp.src('src/ts/**/*.ts')
        .pipe(plumber())
        .pipe(concat('scripts-min-ts.js'))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/preset-typescript'],
            plugins: ["@babel/plugin-transform-typescript"]
        }))        
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
);


gulp.task('js', () =>
    gulp.src('src/js/*.js')
        .pipe(plumber())
        .pipe(concat('scripts-min.js'))
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))        
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('php', () => {
  return gulp.src('./src/php/vista/templates/*.php')
  .pipe((php2html()))
  .pipe(gulp.dest('dist'));
});





gulp.task('html', () => {
    return gulp.src('./src/*.html')
    .pipe(plumber())
    .pipe(htmlmin({ collapseWhitespace: true ,
    removeCommentes:true }))
    .pipe(gulp.dest('dist'));
  });

  gulp.task('css',() => {
	gulp.src('./src/css/**/*.css')
     .pipe(plumber())
        .pipe(cssMin())
		.pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(concat('styles-min.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/css'))
  });
  gulp.task('views', () => {
    return gulp
      .src('src/views/pages/*.pug')
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(
        pug({
          pretty: production ? false : true
        })
      )      
      .pipe(
        cachebust({
          type: 'timestamp'
        })
      )
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist'));
  });

  gulp.task('sass',() => {
    return gulp.src('./src/scss/styles.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'));
  });

  gulp.task('imagen', () =>{
    return gulp.src('./src/assets//**')
    .pipe(plumber())
    .pipe(imagemin([
      gifsicle({interlaced: true}),
      mozjpeg({quality: 75, progressive: true}),
      optipng({optimizationLevel: 5}),
      svgo({
        plugins: [
          {
            name: 'removeViewBox',
            active: true
          },
          {
            name: 'cleanupIDs',
            active: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest('dist/assets'))
  })



gulp.task('default', () => {
  server({
    server: './dist'
  })    
    //gulp.watch('./src/**/*.html',gulp.series('html')).on('change', reload);
    //gulp.watch('./src/css/**/*.css',gulp.series('css'))
    gulp.watch('./src/views/**/*.pug',gulp.series('views')).on('change', reload)
    gulp.watch('./src/scss/**/*.scss',gulp.series('sass')).on('change', reload)
    gulp.watch('./src/ts/**/*.ts',gulp.series('babel')).on('change', reload)
    gulp.watch('./src/js/**/*.js',gulp.series('js')).on('change', reload)
    gulp.watch('./src/php/**/*.php',gulp.series('php')).on('change', reload)
})



