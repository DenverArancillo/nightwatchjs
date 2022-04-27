let apiCommands = {
	requestApi(options) {
		return this.__client.__api.requestApi.request(options)
	}
}

let pageCommands = {

}

let pageExtention = {
	...apiCommands,
	...pageCommands
}

module.exports = pageExtention;