var bower_path = '../bower_components/';
module.exports = function(config) {
    config.set({
        basePath: '../app',
        frameworks: ['jasmine'],
        files: [
            bower_path + 'jquery/dist/jquery.js',
            bower_path + 'angular/angular.js',
            bower_path + 'angular-mocks/angular-mocks.js',

            'scripts/app.js',
            'scripts/controllers/*.js',
            'scripts/directives/*.js',
            'scripts/services/*.js',
            'views/*.html',

            '../test/mocks/**/*.js',
            '../test/specs/**/*.js'
        ],
        exclude: [

        ],
        preprocessors: {
            'views/*.html': ['ng-html2js']
        },
        plugins : ['karma-jasmine', 'karma-phantomjs-launcher', 'karma-ng-html2js-preprocessor'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
//        Continuous Integration mode
//        if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
