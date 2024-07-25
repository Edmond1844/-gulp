const gulp = require('gulp');
const less = require('gulp-less');

function for_git(done) {
    gulp.src([
        './src/fonts/**/*.{woff2,woff}',
        './src/less/**/*.less',
        './src/*.html',
        '!src/page.html'
        
    ],
    
    {
        base: './src'
    })

        .pipe(gulp.dest('./bild'));
    done();
}

exports.for_git = for_git