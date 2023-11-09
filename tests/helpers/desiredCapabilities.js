exports.options = {
    capabilities: {
        platformName: "Android",
        'appium:platformVersion': '12.0',
        'appium:appPackage': 'energy.ev.app',
        'appium:appActivity': 'energy.ev.app.MainActivity',
        'appium:app': '/Users/schoolboy/Downloads/universal.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:deviceName': 'Pixel_7',
        'appium:avdReadyTimeout': '5000'
    },
    host: 'localhost',
    port: 4723
};
