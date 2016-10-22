var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: ['tests.bundle.js'],
        preprocessors: {
            'tests.bundle.js': ['webpack']
        },
        webpack: {
            resolve: webpackConfig.resolve,
            module: webpackConfig.module
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['spec'],
        port: 8089,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        reportSlowerThan: 500
    });
};