// start require
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'run-sequence', 'del'],
    replaceString: /^gulp(-|\.)/,
    camelize: true,
    lazy: true
});
var config = require('./gulp/config-gulp.js');
//end require

//minification for all js custom
gulp.task('minify-js', function () {
    var files = config.sviluppoJs.concat(config.releaseJs);
    return gulp.src(files)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat(config.destFiles.js))
        .pipe(plugins.uglify({mangle: false}))
        .pipe(plugins.rev())
        .pipe(plugins.sourcemaps.write(config.basePaths.maps))
        .pipe(gulp.dest(config.basePaths.dest))
        .pipe(plugins.notify('Minify JS custom file!'));
});

//minification for all css custom
gulp.task('minify-css', function () {
    var files = config.css;
    return gulp.src(files)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat(config.destFiles.css))
        .pipe(plugins.cleanCss())
        .pipe(plugins.rev())
        .pipe(plugins.sourcemaps.write(config.basePaths.maps))
        .pipe(gulp.dest(config.basePaths.dest))
        .pipe(plugins.notify('Minify CSS custom file!'));
});

//remove scripe and styleshit from index.html
gulp.task('remove-reference', function () {
    return gulp.src(config.paths.index.release)
        .pipe(plugins.removeCode({isRelease: true}))
        .pipe(gulp.dest(config.basePaths.src))
        .pipe(plugins.notify('Remove the script and css custom!'));
});

//clean disti folder and index.html for release
gulp.task('clean:dist', function () {
    return plugins.del([config.paths.dist.all,
        config.paths.index.sviluppo,
        config.paths.index.release,
        config.paths.templates.template]);
});

//injection
gulp.task('inject-sviluppo', function () {
    var target = gulp.src(config.paths.index.sviluppo);
    var files = config.sviluppoJs.concat(config.css);
    var sources = gulp.src(files);
    return inject(target, sources, 'sviluppo', config.basePaths.src);
});

gulp.task('inject-reference', function () {
    var target = gulp.src(config.paths.index.release);
    var sources = gulp.src([config.paths.dist.js,config.paths.dist.css]);
    return inject(target, sources, 'release', config.basePaths.src);
});

function inject(target, sources, nameTag, src) {
    return target.pipe(plugins.inject(sources, {name: nameTag, relative: true}))
        .pipe(gulp.dest(src))
        .pipe(plugins.notify('Injection of the script and css!'));
}

//rename 
gulp.task('rename-index', function () {
    return rename(config.paths.index.sviluppo, 'index', '.html', config.basePaths.src);
});

gulp.task('rename-index-sviluppo', function () {
    return rename(config.paths.index.template, 'index-sviluppo', '.html', config.basePaths.src);
});

function rename(source, baseName, ext, src) {
    return gulp.src(source)
        .pipe(plugins.rename({
            basename: baseName,
            extname: ext
        }))
        .pipe(gulp.dest(src))
        .pipe(plugins.notify('Rename html index file!'));
}

//template caching
gulp.task('generate-template-cache', function () {
    return gulp.src([config.paths.templates.html,
        "!" + config.paths.bower.html,
        "!" + config.paths.config.source
    ])
        .pipe(plugins.htmlmin({collapseWhitespace: true}))
        .pipe(plugins.angularTemplatecache())
        .pipe(gulp.dest(config.basePaths.templates));
});

//copy config folder
gulp.task('copy-config', function () {
    return copy(config.paths.config.source, config.paths.config.dest);
});

function copy(source, dest) {
    return gulp.src(config.paths.config.source)
        .pipe(gulp.dest(config.paths.config.dest));
}


//sequence to run
gulp.task('build', function(){
	return plugins.runSequence('clean:dist',
					   'generate-template-cache',
					   'rename-index-sviluppo',
					   'inject-sviluppo',
					   'rename-index',
					   'copy-config',
					   'remove-reference',
					   'minify-js',
					   'minify-css',
					   'inject-reference');
});

//show plugins
gulp.task('plugins', function(){
	console.log(plugins);
});

//The default task (called when you run `gulp` from cli)
gulp.task('default', ['build']);