class TestDrivePage {
    constructor(client) {
        this.client = client;
        this.testDriveButton = '//android.widget.TextView[@text="Test drive the app"]';
        this.nextButton = '//android.widget.TextView[@text="Next"]';
    }

    async navigateThroughTestDrive() {
        await this.client.$(this.testDriveButton).click();
        // ... other interactions
    }

    async isNextButtonEnabled() {
        const button = await this.client.$(this.nextButton);
        return button.isEnabled();
    }
}
module.exports = TestDrivePage;