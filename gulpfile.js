let gulp = require('gulp');
let sass = require("gulp-sass");
let ts = require('gulp-typescript')
let server = require('gulp-webserver');
const buildpath = 'dist'


//Forma Basica de un  gulp task
///Gulp styles
gulp.task('styles', function(){
    return gulp.src('src/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(buildpath +'/assets/styles'));
})

//Gulp Scripts
gulp.task('scripts', function(){
    let tsConfig = ts.createProject('tsconfig.json');
    return tsConfig.src() //Origen
        .pipe(tsConfig())//Transformacion
        .pipe(gulp.dest(buildpath +'/assets/scripts')); //Destino
})


//Gulp HTML
gulp.task('html', function(){
    return gulp.src('src/index.html') //Origen
        .pipe(gulp.dest(buildpath)); //Destino
})

gulp.task('serve', function(){
    return gulp.src(buildpath)
    .pipe(server({
        open: true,
        livereload: true

    }));
});
//gulp default

gulp.task('default', gulp.parallel('styles','scripts','html'));