/**
 * Created by ssinghal on 10/1/15.
 */
exports.config = {
    specs: [
        'e2e/**/*.js'
    ],
//    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9001',
    framework: 'jasmine',
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    }
};