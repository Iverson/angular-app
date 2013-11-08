module.exports = function(config){
    config.set({


    basePath : '../',

    files : [
        'e2e/**/*.js'
    ],

    autoWatch : true,

    browsers : ['Chrome'],

    frameworks: ['ng-scenario'],

    singleRun : false,

    proxies : {
      '/': 'http://localhost:3000/'
    },
    
    urlRoot: '__karma__',

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-scenario'    
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    }

})}

