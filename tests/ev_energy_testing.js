const webdriverio = require('webdriverio');
const expect = require('chai').expect;
const config = require('./helpers/desiredCapabilities.js').options;
const LoginPage = require('./pageObject/LoginPage.js');
const RegistrationPage = require('./pageObject/RegistrationPage.js');
const TestDrivePage = require('./pageObject/TestDrivePage.js'); 
const faker = require('faker');
const { saveTestData } = require('./helpers/fileHelper');

describe('EV Energy Testing', function () {
    this.timeout(50000); // Setting timeout for all tests in this suite
    let client;
    let loginPage;
    let registrationPage;
    let testDrivePage;

    beforeEach(async function () {
        this.timeout(50000);
        // Start a new remote session
        client = await webdriverio.remote(config);
        // Initialize page objects with the new client session
        loginPage = new LoginPage(client);
        registrationPage = new RegistrationPage(client);
        testDrivePage = new TestDrivePage(client);
    });
    
    afterEach(async function () {
        if (client && client.sessionId) {
            try {
                // Close the client session
                await client.deleteSession();
            } catch (error) {
                console.error('Failed to close the client session:', error);
            }
        }
    });


    it('tests login functionality with fake credentials', async function () {
        const randomEmail = faker.internet.email();
        const randomPassword = faker.internet.password();
        const errorMessage = await loginPage.login(randomEmail, randomPassword);
        await saveTestData(randomEmail, randomPassword);

        expect(errorMessage).to.equal('We don’t recognise that email or password. Check details and try again.');
    });



    it('tests registration process with toggling switches', async function () {
        this.timeout(50000);
    
        const fullName = faker.name.findName();
        const email = faker.internet.email();
        const password = faker.internet.password();
    
        await registrationPage.startSetup(fullName, email, password);
    
        await registrationPage.toggleTermsSwitch();
        await registrationPage.togglePromoSwitch();
    
        await registrationPage.clickCreateAccountButton();
    
        const loadingImageDisplayed = await registrationPage.isLoadingImageDisplayed();
        expect(loadingImageDisplayed).to.be.true;
    });

    it("should click the 'test drive' button", async function() {
        this.timeout(50000);

    const testDriveButtonSelector = '//android.widget.TextView[@text="Test drive the app"]';
    const testDriveButton = await client.$(testDriveButtonSelector);
    await testDriveButton.click();

    const nextButtonSelector = 'android=new UiSelector().className("android.widget.TextView").text("Next")';

    const firstNextButton = await client.$(nextButtonSelector);
    await firstNextButton.click();
    
    await client.pause(2000); // may need to adjust the time based on how long the UI takes to update
    
    const secondNextButton = await client.$(nextButtonSelector);
    await secondNextButton.click();

    await client.pause(2000);
    const thirdNextButton = await client.$(nextButtonSelector);
    await thirdNextButton.click();


    const finishTourButtonSelector = '//android.widget.TextView[@text="Finish tour"]';
    const finishTourButton = await client.$(finishTourButtonSelector);
    await finishTourButton.click();

    const modelX = '//android.widget.TextView[@text="Tesla Model X"]';
    const vehicleInfo = await client.$(modelX);
    const text = await vehicleInfo.getText();
    expect(text).to.equal('Tesla Model X');
    


    });

});
