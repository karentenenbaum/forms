const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $('#emailInput')
    }

    get inputfullName() {
        return $('#fullNameInput')
    }

    get inputPassword() {
        return $('#passwordInput')
    }

    get inputConfirmPassword() {
        return $('#confirmPasswordInput')
    }

    get btnSubmit() {
        return $('#signUpButton')
    }


    /**
     * Mocked values
     */

    get invalidFullName() {
        return 'kkk';
    }

    get fullName() {
        return 'karen tenenbaum';
    }

    get email() {
        return 'kjtenenbaum@gmail.com'
    }

    get password() {
        return 'karen987';
    }

    get passwordDifferent() {
        return 'karen777';
    }

    get checkFullName() {
        return $('#checkFullName');
    }

    get checkConfirmPassword() {
        return $('#checkConfirmPassword');
    }

    get checkRegisterServer() {
        return $('#login-result');
    }


    clearValues() {
        this.inputEmail.clearValue();
        this.inputfullName.clearValue();
        this.inputConfirmPassword.clearValue();
        this.inputPassword.clearValue();
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register(email, password, confirmPassword, fullname) {
        await (await this.fullName).setValue(fullname);
        await (await this.inputEmail).setValue(email);
        await (await this.inputPassword).setValue(password);
        await (await this.confirmPassword).setValue(confirmPassword);
        await (await this.btnSubmit).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('register');
    }
}

module.exports = new RegisterPage();
