let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');
let concat = require('gulp-concat');
let rename = require('gulp-rename');
let autoprefixer = require('gulp-autoprefixer');
let uglify = require('gulp-uglify-es').default;

gulp.task('html', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('script', function() {
    return gulp.src('app/js/*.js')
    .pipe(browserSync.reload({stream: true}))
})

//INDEX SCSS
gulp.task('indexSCSS', function() {
    return gulp.src('app/scss/index/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/index'))
    .pipe(browserSync.reload({stream: true}))
});

//ABOUT SCSS
gulp.task('aboutSCSS', function() {
    return gulp.src('app/scss/about/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/about'))
    .pipe(browserSync.reload({stream: true}))
});

//NEWS SCSS
gulp.task('newsSCSS', function() {
    return gulp.src('app/scss/news/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/news'))
    .pipe(browserSync.reload({stream: true}))
});

//CITY SCSS
gulp.task('citySCSS', function() {
    return gulp.src('app/scss/city/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/city'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            index: 'city.html'
        }
    });
});

//INDEX
gulp.task('indexJS', function() {
    return gulp.src([
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/index/'))
    .pipe(browserSync.reload({stream: true}))
});

//ABOUT
gulp.task('aboutJS', function() {
    return gulp.src([
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/about/'))
    .pipe(browserSync.reload({stream: true}))
});

//NEWS
gulp.task('newsJS', function() {
    return gulp.src([
        'app/js/libs/swiper/swiper-bundle.min.js',
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/news/'))
    .pipe(browserSync.reload({stream: true}))
});

//CITY
gulp.task('cityJS', function() {
    return gulp.src([
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/estateModal.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/city/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('aboutSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('aboutJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('newsSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('newsJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('indexSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('indexJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('citySCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('cityJS'))
    gulp.watch('app/**/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('indexSCSS', 'indexJS', 
                                    'aboutSCSS', 'aboutJS', 
                                    'newsSCSS', 'newsJS', 
                                    'citySCSS', 'cityJS',
                                    'browserSync', 'watch'));
