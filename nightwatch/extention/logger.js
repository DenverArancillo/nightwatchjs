const logger = require('../../node_modules/nightwatch/lib/utils/logger')

class Log {
	constructor(client, debugmode) {
		this.api = client
		this.debugmode = debugmode
		this.log = []
	}

	formatMessage(message, type) {
		switch (type) {
			default:
				console.log(`----- ${message} -----`);
		}
	}

	logMessage(message, type) {
		this.api.perform(done => {
			this.log.push(message)
			this.formatMessage(message, type)
			done()
		})
	}

	showAllLogs() {
		this.api.perform(done => {
			console.log(this.log.join('\n'))
			done()
		})
	}
}

module.exports = Log;