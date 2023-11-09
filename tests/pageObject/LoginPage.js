class LoginPage {
    constructor(client) {
        this.client = client;
        this.loginButton = '//android.widget.TextView[@text="Log in"]';
        this.emailInput = 'android=new UiSelector().resourceId("input-login-email")';
        this.passwordInput = 'android=new UiSelector().resourceId("input-login-password")';
        this.secondLoginButton = '(//android.widget.TextView[@text="Log in"])[2]';
        this.errorMessage = '//android.widget.TextView[@text="We don’t recognise that email or password. Check details and try again."]';
    }

    async login(email, password) {
        await this.client.$(this.loginButton).waitForExist({ timeout: 30000 });
        await this.client.$(this.loginButton).click();
        await this.client.$(this.emailInput).setValue(email);
        await this.client.$(this.passwordInput).setValue(password);
        await this.client.$(this.secondLoginButton).click();
        await this.client.$(this.errorMessage).waitForDisplayed({ timeout: 30000 });
        return await this.client.$(this.errorMessage).getText();
    }
}

module.exports = LoginPage;