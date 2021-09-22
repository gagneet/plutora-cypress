const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "cypress/cucumber-json",
    reportPath: "./report/cucumber-htmlreport.html",
    metadata:
    {
        browser: {
            name: 'Chrome',
            version: '92'
        },
        device: 'localhost',
        platform: {
            name: 'macOS Big Sur',
            version: '11.5',
        }
    },
});