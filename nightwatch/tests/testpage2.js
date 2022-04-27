const initialize = require('../extention/initialize');

module.exports = initialize({
	"@tags": ['test'],
	before: browser => {
		global.homepage = browser.page.homepage();
	},

	"Home page 2": async client => {
		const result = await client.windowHandles();
		client.assert.elementPresent("div.login_logo")
		// homepage.GetDetails("@mainscreen_element", 1, 2, 3, 4, 5, 6, 7, 8);
		
		// let data = await client.requestApi.request('https://jsonplaceholder.typicode.com/todos/1')

		homepage.login()
		// let data = await homepage.sendData('https://jsonplaceholder.typicode.com/todos/1')



		client.perform(done => {
			// console.log(data)
			done();
		})

		
	}
});