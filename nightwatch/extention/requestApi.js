const axios = require('axios');

class Api {
	constructor (client) {
		this.api = client
		this.axios = axios
	}

	request (url) {
		return new Promise((resolve, reject) => {
			this.api.perform(async done => {

				// resolve(await axios('https://jsonplaceholder.typicode.com/todos/1'))
				resolve(await axios(url))

				done();
			})
		})
	}

}

module.exports = Api;