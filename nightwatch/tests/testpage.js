const initialize = require('../extention/initialize');

module.exports = initialize({
	"@tags": ['test'],
	before: browser => {
		global.homepage = browser.page.homepage();
	},

	"Home page": async client => {
		const result = await client.windowHandles();
		client.assert.elementPresent("div.login_logo")
		homepage.GetDetails("@mainscreen_element", 1, 2, 3, 4, 5, 6, 7, 8);
		
		// let data = await client.requestApi.request('https://jsonplaceholder.typicode.com/todos/1')

		// homepage.login()
		// let data = await homepage.sendData('https://jsonplaceholder.typicode.com/todos/1')

		// LOGGER("1")
		// LOGGER("2")
		// LOGGER("3")

		// client.perform(done => {
		// 	// console.log(data)
		// 	done();
		// })
	}
});