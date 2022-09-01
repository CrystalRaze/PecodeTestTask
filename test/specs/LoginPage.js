const fs = require('fs');
const LoginPage = require('../pageobjects/methods');
const loginPage = new LoginPage();
require('dotenv').config();
const { MYNAME, MYPASSWORD } = process.env;
const folder = './screenshots';


before(async () => {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    };
    await browser.url('https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php');
    await browser.maximizeWindow();
});

describe("The existence of all the page's elements", () => {

    it("The main login form is displayed", async () => {
        await expect(loginPage.mainForm).toBeDisplayed();
    });

    it("The 'Pecode' logo exists", async () => {
        await expect(loginPage.Logo).toBeExisting();
    });

    it("The 'Pecode' logo's link is valid", async () => {
        let logoLink = await loginPage.Logo.getAttribute('src');
        await expect(await loginPage.checkLinkValidation(logoLink)).toEqual('image/svg+xml');
    });

    it("The form's header is displayed", async () => {
        await expect(loginPage.formHeader).toBeDisplayed();
    });

    it("The form's header is valid", async () => {
        await expect(loginPage.formHeader).toHaveText('AQA internship Login');
    });

    it("The 'Username' input exists", async () => {
        await expect(loginPage.usernameInput).toExist();
    });

    it("The 'Username' input's placeholder is valid", async () => {
        await expect(await loginPage.usernameInput.getAttribute('placeholder')).toEqual('Username');
    });

    it("The 'Password' input exists", async () => {
        await expect(loginPage.passwordInput).toExist();
    });

    it("The 'Password' input's placeholder is valid", async () => {
        await expect(await loginPage.passwordInput.getAttribute('placeholder')).toEqual('Password');
    });

    it("The 'Login' button exists", async () => {
        await expect(loginPage.loginButton).toExist();
    });

    it("The 'Login' button's text is valid", async () => {
        await expect(await loginPage.loginButton.getAttribute('value')).toEqual('Login');
    });
})

describe("Login with both inputs empty", () => {

    before(async () => {
        await loginPage.loginButton.click();
    });

    it("Username input's error is displayed", async () => {
        await expect(loginPage.usernameError).toBeDisplayed();
    });

    it("Username input's error has a valid text", async () => {
        await expect(loginPage.usernameError).toHaveText('Please enter username.');
    });

    it("Password input's error is displayed", async () => {
        await expect(loginPage.passwordError).toBeDisplayed();
    });

    it("Password input's error has a valid text", async () => {
        await expect(loginPage.passwordError).toHaveText('Please enter your password.');
    });
});

describe("Login with empty 'Username' input", () => {

    before(async () => {
        await loginPage.loginWithCredentials({
            password: MYPASSWORD
        });
    });

    it("Username input's error is displayed", async () => {
        await expect(loginPage.usernameError).toBeDisplayed();
    });

    it("Username input's error has a valid text", async () => {
        await expect(loginPage.usernameError).toHaveText('Please enter username.');
    });

    it("Password input's error isn't displayed", async () => {
        await expect(await loginPage.passwordError.isDisplayed()).toBe(false);
    });
});

describe("Login with empty 'Password' input", () => {

    before(async () => {
        await loginPage.loginWithCredentials({
            username: MYNAME
        });
    });

    it("Username input's error isn't displayed", async () => {
        await expect(await loginPage.usernameError.isDisplayed()).toBe(false);
    });

    it("Password input's error is displayed", async () => {
        await expect(loginPage.passwordError).toBeDisplayed();
    });

    it("Password input's error has a valid text", async () => {
        await expect(loginPage.passwordError).toHaveText('Please enter your password.');
    });
});

describe("Login with valid credentials", () => {

    before(async () => {
        await loginPage.loginWithCredentials({
            username: MYNAME,
            password: MYPASSWORD
        });
    });

    it("User is redirected to the 'Dashboard' page", async () => {
        await expect(loginPage.fakeDashboardSelector).toBeDisplayed();
    });

});
