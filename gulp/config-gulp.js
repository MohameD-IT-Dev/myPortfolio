module.exports = {

    css: ["assets/css/app.css",
          "app/components/navigation/nav.css"],
    sviluppoJs: ["app/app.js",
                 "app/home/home.module.js",
                 "app/home/home.route.js",
                 "app/home/home.controller.js",
                 "app/about/about.module.js",
                 "app/about/about.route.js",
                 "app/about/about.controller.js",
                 "app/contact/contact.module.js",
                 "app/contact/contact.route.js",
                 "app/contact/contact.controller.js",
                 //components
                 "app/components/navigation/nav.module.js",
                 "app/components/navigation/nav.component.js",
                 //templates
                 "app/templates/templates.module.js"],
    releaseJs: ["app/templates/templates.js"],
    basePaths: {
        src: 'app/',
        dest: 'app/dist/',
        templates: 'app/templates/',
        maps: 'maps'
    },
    paths: {
        bower: {
            js: 'bower_components/**/*.js',
            css: 'bower_components/**/*.css',
            min: 'bower_components/**/*.min.js',
            html: 'bower_components/**/*.html'
        },
        dist: {
            all: 'app/dist/**/*',
            js: 'app/dist/*.min.js',
            css: 'app/dist/*.min.css'
        },
        index: {
            template: 'app/index-template.html',
            release: 'app/index.html',
            sviluppo: 'app/index-sviluppo.html'
        },
        templates: {
            html: 'app/**/*.html',
            template: 'app/templates/templates.js'
        },
        config: {
            source: 'app/config/**/*',
            dest: 'app/dist/config'
        }
    },
    destFiles: {
        js: 'app.min.js',
        css: 'app.min.css'
    }
}