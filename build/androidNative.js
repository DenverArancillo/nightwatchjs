const androidNativeEnv = (drivers) => {
	return {
		selenium: {
			start_process: false,
			start_session: true,
			server_path: '../selenium/selenium-server-4.0.0.jar',
			port: 4445,
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
			browserName: "",
			app:"./examples/tests/app/calc.apk",
			appPackage:"com.google.android.calculator",
			appActivity:"com.android.calculator2.Calculator",
			platformName: "Android",
			platformVersion: "9.0.0",
			deviceName: "test"
		}
	}
}

module.exports = androidNativeEnv