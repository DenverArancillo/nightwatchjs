const androidBrowserEnv = (drivers) => {
	return {
		selenium: {
			start_process: false,
			start_session: true,
			selenium_host : "0.0.0.0",
			// server_path: '../selenium/selenium-server-4.0.0.jar',
			path: "/wd/hub",
			port: 4723,
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

		desiredCapabilities: {
			automationName:"Appium",
			browserName: "Chrome",
			chromedriverExecutable: (drivers.chromedriver ? drivers.chromedriver.path : ''),
			platformName: "Android",
			platformVersion: "9.0.0",
			device: "Android",
			deviceName: "test"
		}
	}
}

module.exports = androidBrowserEnv