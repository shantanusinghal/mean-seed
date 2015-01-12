module.exports = function(grunt) {
    // load all grunt tasks matching the 'grunt-*' pattern
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    grunt.initConfig({
        config: grunt.file.readJSON('config.json'),
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            options: {
                hostname: 'localhost',
                base: '<%= config.app %>',
                middleware: function(connect) {
                    return [
                        connect().use('/bower_components', connect.static('./bower_components')),
                        connect.static('app')
                    ];
                }
            },
            test: {
                options: {
                    port: 9001,
                    hostname: 'localhost'
                }
            },
            server: {
                options: {
                    port: 9001,
                    open: true,
                    livereload: 35729
                }
            }
        },
        watch: {
            server: {
                options: {
                    livereload: '<%= connect.server.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/index.html',
                    '<%= config.app %>/views/{,*/}*.html',
                    '<%= config.app %>/scripts/{,*/}*.js'
                ]
            }
        },
        karma: {
            unit: {
                options: {
                    configFile: 'test/karma.conf.js',
                    singleRun: true
                }
            }
        },
        protractor: {
            options: {
                keepAlive: true,
                configFile: "test/protractor.conf.js",
                args: {
                    seleniumServerJar: 'node_modules/protractor/selenium/selenium-server-standalone-2.44.0.jar',
                    chromeDriver: 'node_modules/protractor/selenium/chromedriver.exe'
                }
            },
            e2e: {
            }
        }
    });

    grunt.registerTask('server', [
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('test:unit', [
        'karma:unit'
    ]);

    grunt.registerTask('test:e2e', [
        'connect:test',
        'protractor:e2e'
    ]);

    grunt.registerTask('test', [
        'test:unit',
        'test:e2e'
    ]);

    grunt.registerTask('default', 'connect:server');

};