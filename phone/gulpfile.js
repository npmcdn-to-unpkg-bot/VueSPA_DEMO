/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp')
var webpack = require('gulp-webpack')
var named = require('vinyl-named')
var babel = require("gulp-babel");

var appList = ['app']

gulp.task('default', ['bundle'], function () {
    console.log('done')
})

gulp.task('bundle', function () {
     gulp.src(mapFiles(appList, 'js'))
       .pipe(named())
       .pipe(webpack(getConfig()))
       .pipe(babel({"ignore": ["*.map"], "presets": ["es2015"] }))
       .pipe(gulp.dest('./js/dist/'))
     
})

gulp.task('watch', function () {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({ watch: true })))
        .pipe(babel({"ignore": ["*.map"], "presets": ["es2015"] }))
        .pipe(gulp.dest('./js/dist/'))
})



function getConfig(opt) {
    var config = {
        output:{
            publicPath: './js/dist/', // This is used to generate URLs
        },
        module: {
            loaders: [
              { test: /\.vue$/, loader: 'vue' }
            ]
        }
        ,devtool: 'source-map'
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}


function mapFiles(list, extname) {
    return list.map(function (app) { return './js/' + app + '.' + extname })
}