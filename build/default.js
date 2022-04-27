const defaultEnv = (drivers) => {
	return {
		// webdriver: {
		// 	start_process: true,
		// 	server_path: (drivers.chromedriver ? drivers.chromedriver.path : ''),
		// 	// server_path: './webdrivers/chromedriver.exe',
		// 	host: 'localhost',
		// 	port: 9515,
		// },

		selenium: {
			start_process: false,
			start_session: true,
			server_path: '../selenium/selenium-server-4.0.0.jar',
			port: 4444,
			check_process_delay: 5000,
			cli_args: {
				"webdriver.chrome.driver": (drivers.chromedriver ? drivers.chromedriver.path : '')
				// 'webdriver.chrome.driver': './webdrivers/chromedriver.exe'
			}
		},

		test_workers: {
			enabled: true,
			workers: 10
		},

		globals: {
			debugmode: true
		},

		launch_url: 'https://www.saucedemo.com/',
		silent: true,
		skip_testcases_on_fail: true,
		screenshots: {
			enabled: true,
			path: './nightwatch/screenshots',
			on_failure: true,
			on_error: false,
			log_screenshot_data: true
		},

		desiredCapabilities : {
			browserName : 'chrome',
			'chromeOptions' : {
				// More info on Chromedriver: https://sites.google.com/chromium.org/driver/
				args: [
					'start-maximized',
					'--no-sandbox',
					// 'disable-gpu',
					// 'disable-extentions',
					// '--disable-features=VizDisplayCompositor',
					// '--enable-logging'
					//'--ignore-certificate-errors',
					//'--allow-insecure-localhost',
					'--headless'
				],
				excludeSwitches: [
					'enable-logging'
				]
			},
		}
	}
}

module.exports = defaultEnv;