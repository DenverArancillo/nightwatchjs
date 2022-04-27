const pageExtention = require('../custom/utils/pageExtention');

let apiCommands = {
	// requestApi(options) {
	// 	return this.__client.__api.requestApi.request(options)
	// },

	sendData(options) {
		return this.requestApi(options)
	}
}

let pageCommands = {
	login() {
		this.api.perform(done => {
			console.log('page command')
			this.api.pause(10000)

			// console.log(this)

			done();
		})

		return this;
	}
}

let commands = {
	...apiCommands,
	...pageCommands
}

module.exports = {
	commands: [pageExtention, commands],
	elements: {
		mainscreen_element: 'div'
	}
}