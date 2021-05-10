const registerPage = require('../pageobjects/register.page');

describe('Register test', () => {
    beforeAll("Open browser", () => {
        registerPage.open();
        browser.pause(500);
    })

    it('Test register with invalid fullname', () => {
        registerPage.inputFullName.setValue(registerPage.invalidFullName);
        expect(registerPage.checkFullName).toHaveTextContaining('Full Name field must have more than 6 letters and at least one space in between.');
    });

    it('Test register with different password and confirm password', () => {
        registerPage.clearValues();
        registerPage.inputFullName.setValue(registerPage.fullName);
        registerPage.inputEmail.setValue(registerPage.email);
        registerPage.inputPassword.setValue(registerPage.password);
        registerPage.inputConfirmPassword.setValue(registerPage.passwordDifferent);
        browser.keys("Tab")
        expect(registerPage.checkConfirmPassword).toHaveTextContaining('Password confirmation field must be equal to the content of the Password input.');
        browser.pause(1000);
    });

    it('Test register with server error', () => {
        registerPage.clearValues();
        registerPage.register(registerPage.email, registerPage.password, registerPage.password, registerPage.fullName);
        expect(registerPage.checkRegisterServer).toHaveTextContaining('REGISTRATION ERROR. SERVER ERROR.');
        browser.pause(1000);
    });

});

