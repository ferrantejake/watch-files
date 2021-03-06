var gulp = require('gulp'),
    util = require('gulp-util'),
    project = require('./gulp.json'), 
    path = require('path'),
    watcher = gulp.watch(project.src),
    exec = require('child_process').exec;

// execute this in command prompt using `gulp watch`
gulp.task('watch', () => {
    // wait for file changes
    watcher.on('change', function (event) {
        var filePath = event.path;
        var fileName = path.basename(filePath);

        // run child process javac command
        exec('javac ' + fileName, function (err) {
            if (err) {
                util.log(err.message);
            } else {
                util.log(`[${fileName}] complete, no errors`)
            }
        });
    });
});
