class RegistrationPage {
    constructor(client) {
        this.client = client;
        this.startSetUpButton = '//android.widget.TextView[@text="Start set up"]';
        this.fullNameInput = 'android=new UiSelector().resourceId("input-register-username")';
        this.emailInput = 'android=new UiSelector().resourceId("input-register-email")';
        this.passwordInput = 'android=new UiSelector().resourceId("input-register-password")'
        this.termsSwitch = 'android=new UiSelector().resourceId("switch-register-privacy")';
        this.promoSwitch = 'android=new UiSelector().resourceId("switch-register-promotions")';
        this.createAccountButton = '//android.widget.TextView[@text="Create account"]';
        this.loadingImage = '//android.widget.ImageView'; 
    }

    async startSetup(fullName, email, password) {
        await this.client.$(this.startSetUpButton).waitForExist({ timeout: 30000 });
        await this.client.$(this.startSetUpButton).click();
        await this.client.$(this.fullNameInput).setValue(fullName);
        await this.client.$(this.emailInput).setValue(email);
        await this.client.$(this.passwordInput).setValue(password);
        // ... set values for other inputs
    }

    async clickCreateAccountButton() {
        const button = await this.client.$(this.createAccountButton);
        await button.waitForExist({ timeout: 30000 });
        if (await button.isEnabled()) {
            await button.click();
        } else {
            throw new Error("Create account button is not enabled");
        }
    }

    async isCreateAccountButtonEnabled() {
        const button = await this.client.$(this.createAccountButton);
        return button.isEnabled();
    }

    async isLoadingImageDisplayed() {
        const image = await this.client.$(this.loadingImage);
        await image.waitForDisplayed({ timeout: 30000 });
        return image.isDisplayed();
    }

    async toggleTermsSwitch() {
        const termsSwitchElement = await this.client.$(this.termsSwitch);
        await termsSwitchElement.waitForExist({ timeout: 30000 });
        await termsSwitchElement.click();
    }

    async togglePromoSwitch() {
        const promoSwitchElement = await this.client.$(this.promoSwitch);
        await promoSwitchElement.waitForExist({ timeout: 30000 });
        await promoSwitchElement.click();
    }
}

module.exports = RegistrationPage;
