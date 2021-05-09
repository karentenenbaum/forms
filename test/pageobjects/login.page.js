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
        return "123123"
    }

    get loginResult() {
        return $('#login-result')
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, password) {
        await (await this.inputEmail).setValue(username);
        await (await this.inputPassword).setValue(password);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
