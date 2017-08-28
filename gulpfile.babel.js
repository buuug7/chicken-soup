/*
 |--------------------------------------------------------------------------
 | gulpfile.babel
 |--------------------------------------------------------------------------
 |
 | Created by puguo on 8/22/2017.
 |
 |
*/

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import del from 'del';

let theme = 'bs4';
let paths = {
    stylesFrom: [`themes/${theme}/assets/scss/**/*`],
    stylesTo: `themes/${theme}/assets/css`,
};

gulp.task('clean', () => {
    return del([paths.stylesTo]);
});

gulp.task('styles', () => {
    return gulp.src(paths.stylesFrom)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compact' // Default: nested Values: nested, expanded, compact, compressed
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.stylesTo));
});

gulp.task('watch', () => {
    gulp.watch([paths.stylesFrom], ['styles']);
});

gulp.task('build', ['clean', 'styles']);

gulp.task('default', ['clean', 'watch']);
