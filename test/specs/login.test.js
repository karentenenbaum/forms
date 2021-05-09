const loginPage = require('../pageobjects/login.page');

describe('Login test', () => {
    beforeAll("Open browser", () => {
        loginPage.open();
        browser.pause(500);
    })

    it('Test login with invalid credentials', () => {
        loginPage.login(loginPage.invalidEmail, loginPage.invalidPassword);
        expect(loginPage.loginResult).toHaveTextContaining('CREDENTIALS ARE INVALID');
        browser.pause(1000);
    });

    it('Test login invalid email format', () => {
        loginPage.clearValues();
        browser.pause(500);
        loginPage.inputEmail.setValue(loginPage.invalidEmailFormat);
        browser.keys("Tab")
        expect(loginPage.checkEmail).toHaveTextContaining('E-mail field must have a valid email format');
        browser.pause(1000);
    });

    it('Test login with null password input', () => {
        loginPage.clearValues();
        browser.pause(500);
        loginPage.inputEmail.setValue(loginPage.invalidEmail);
        browser.keys("Tab")
        loginPage.inputPassword.setValue('');
        browser.keys("Tab");
        expect(loginPage.checkPassword).toHaveTextContaining('Password field must contain at least 8 characters, consisting of letters and numbers.');
        browser.pause(1000);
    });

});

