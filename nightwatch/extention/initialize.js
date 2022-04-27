const api = require('./requestApi')
const messageLogger = require('./logger')

const extend = (testcase, testsuite) => {
	return async client => {
		client.init()

		client.requestApi = new api(client)

		const log = new messageLogger(client, client.globals.debugmode)
		global.LOGGER = log.logMessage.bind(log)

		try {
			client.perform(done => {
				testcase(client)
				done()
			})
		} catch (error) {
			// client.perform(done => {
			// 	log.showAllLogs()
			// 	done()
			// })
		} finally {
			
		}

		client.end()
	}
}

module.exports = function (testsuite) {
	let suiteList = Object.keys(testsuite)
	suiteList.forEach(prop => {
		if (typeof testsuite[prop] === 'function' && !prop.includes('before') && !prop.includes('after')) {
			testsuite[prop] = extend(testsuite[prop], testsuite)
		}
	})

	return testsuite
}