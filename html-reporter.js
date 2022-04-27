const htmlreporter = require('nightwatch-html-reporter');

module.exports = {
	write: function (results, options, done) {
		let reporter = new htmlreporter({
			openBrowser: true,
			reportsDirectory: `${__dirname}/nightwatch/reports/`
		});

		reporter.fn(results, done)
	}
}