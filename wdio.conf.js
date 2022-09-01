const video = require('wdio-video-reporter');
exports.config = {
    specs: ['./test/specs/**/*.js'],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec',
        ['mochawesome', {
            outputDir: './test_results',
            outputFileFormat: function (opts) {
                return `results.json`
            },
        }],
    ],
    mochawesomeOpts: {
        includeScreenshots: true,
        screenshotUseRelativePath: true
    },

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            await browser.saveScreenshot(`./screenshots/${test.title}.png`)
        };
    },
};
