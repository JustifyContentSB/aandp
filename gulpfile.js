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

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            index: 'about.html' 
        }
    });
});

//FINAl SCSS
gulp.task('finalSCSS', function() {
    return gulp.src('app/scss/final/final.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/final'))
    .pipe(browserSync.reload({stream: true}))
});

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

//SERVICES SCSS
gulp.task('servicesSCSS', function() {
    return gulp.src('app/scss/services/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/services'))
    .pipe(browserSync.reload({stream: true}))
});

//PARTNERS SCSS
gulp.task('partnersSCSS', function() {
    return gulp.src('app/scss/partners/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/partners'))
    .pipe(browserSync.reload({stream: true}))
});

//CONTACTS SCSS
gulp.task('contactsSCSS', function() {
    return gulp.src('app/scss/contacts/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/contacts'))
    .pipe(browserSync.reload({stream: true}))
});

//OWNER SCSS
gulp.task('ownerSCSS', function() {
    return gulp.src('app/scss/owner/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/owner'))
    .pipe(browserSync.reload({stream: true}))
});

//BUILDER SCSS
gulp.task('builderSCSS', function() {
    return gulp.src('app/scss/builder/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/builder'))
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

//CARDJK SCSS
gulp.task('cardjkSCSS', function() {
    return gulp.src('app/scss/cardjk/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/cardjk'))
    .pipe(browserSync.reload({stream: true}))
});

//CARDOBJ SCSS
gulp.task('cardobjSCSS', function() {
    return gulp.src('app/scss/cardobj/style.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('app/css/cardobj'))
    .pipe(browserSync.reload({stream: true}))
});

//INDEX
gulp.task('indexJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js',
        'app/js/libs/swiper/swiper-bundle.min.js',
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/swiperApartment.js',
        'app/js/_main/swiperFlatIndex.js',
        'app/js/_main/swiperHouse.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/index/'))
    .pipe(browserSync.reload({stream: true}))
});

//COMMON
gulp.task('commonJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js',
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/common/'))
    .pipe(browserSync.reload({stream: true}))
});

//NEWS
gulp.task('newsJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js',
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/infoList.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/news/'))
    .pipe(browserSync.reload({stream: true}))
});

//CITY
gulp.task('cityJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js', 
        'app/js/libs/jquery-range/jquery-ui.min.js', 
        'app/js/libs/jquery-range/jquery.ui.touch-punch.min.js', 
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/estate.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/city/'))
    .pipe(browserSync.reload({stream: true}))
});

//CARDJK
gulp.task('cardjkJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js', 
        'app/js/libs/swiper/swiper-bundle.min.js', 
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/dots.js',
        'app/js/_main/compositionTable.js',
        'app/js/_main/swiperClubhouse.js',
        'app/js/_main/swiperHouse.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/cardjk/'))
    .pipe(browserSync.reload({stream: true}))
});

//CARDOBJ
gulp.task('cardobjJS', function() {
    return gulp.src([
        'app/js/libs/jquery/jquery-3.5.1.min.js', 
        'app/js/libs/swiper/swiper-bundle.min.js', 
        'app/js/_main/headerMenu.js', 
        'app/js/_main/phoneModal.js',
        'app/js/_main/dots.js',
        'app/js/_main/swiperClubhouse.js',
        'app/js/_main/swiperHouse.js',
        ])
    .pipe(concat('script.min.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('app/js/cardobj/'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('finalSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('aboutSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('newsSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('servicesSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('partnersSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('contactsSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('ownerSCSS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('builderSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('commonJS'))
    gulp.watch('app/js/*.js', gulp.parallel('newsJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('indexSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('indexJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('citySCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('cityJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('cardjkSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('cardjkJS'))
    gulp.watch('app/scss/**/*.scss', gulp.parallel('cardobjSCSS'))
    gulp.watch('app/js/*.js', gulp.parallel('cardobjJS'))
    gulp.watch('app/**/*.html', gulp.parallel('html'))
    gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('default', gulp.parallel('indexSCSS', 'indexJS', 
                                    'aboutSCSS', 'commonJS',
                                    'newsSCSS',  'builderSCSS',
                                    'servicesSCSS', 'partnersSCSS',
                                    'contactsSCSS', 'ownerSCSS',
                                    'citySCSS', 'cityJS',
                                    'cardjkSCSS', 'cardjkJS',
                                    'cardobjSCSS', 'cardobjJS',
                                    'newsJS', 'finalSCSS',
                                    'browserSync', 'watch'));
