const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}

//frameworks specifies the frameworks that Karma should recognize and use. We want Karma to understand both jQuery and Jasmine.

//The files array lets Karma know which files to load. Specifically, we need to load our JavaScript business logic as well as our tests. We use a globbing pattern (the * symbol) to specify that all files ending in .js and all files ending in -spec.js should be loaded.

//We’ve also added a plugins array. Technically, Karma autoloads all “sibling” modules beginning with karma, so we don’t actually need this array to make our code work. However, there are benefits to explicitly stating the plugins being used (including enhanced readability). It's included here to emphasize that the included functionality we’re about to discuss comes from plugins.
