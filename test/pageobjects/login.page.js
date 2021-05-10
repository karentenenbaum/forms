const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $('#emailInput')
    }

    get inputPassword() {
        return $('#passwordInput')
    }

    get btnSubmit() {
        return $('#login-submit')
    }


    /**
     * Mocked values
     */
    get invalidEmail() {
        return "kjt@gmail.com"
    }

    get invalidPassword() {
        return "123123qwe"
    }

    get loginResult() {
        return $('#login-result')
    }

    get checkEmail() {
        return $('#checkEmail')
    }

    get checkPassword() {
        return $('#checkPassword')
    }


    get invalidEmailFormat() {
        return 'asdasd@w';
    }

    clearValues() {
        this.inputEmail.clearValue();
        this.inputPassword.clearValue();
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(email, password) {
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('https://karentenenbaum.github.io/qa-automation-forms/html/login.html');
    }
}

module.exports = new LoginPage();
