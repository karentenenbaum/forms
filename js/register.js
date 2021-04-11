let errorsArray = [];

function checkForm() {
    const formElement = document.querySelector("form");
    if (!formElement) {
        errorsArray.push('message');
    }
}

function checkLabelFullName() {
    const labelFullName = document.querySelector('label[for="full_name"]');
    if (!labelFullName) {
        errorsArray.push('Full name label is missing');
    }
}

function checkInputFullName() {
    const inputFullName = document.querySelector(['input[type="text"][name="full_name"][required]']);
    if (!inputFullName) {
        errorsArray.push('Full name input is missing or is incorrect');
    }
}

function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="email"]']);
    if (!labelEmail) {
        errorsArray.push('E-mail label is missing');
    }
}

function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="email"][name="email"][required]']);
    if (!inputEmail) {
        errorsArray.push('E-mail input is missing or is incorrect');
    }
}

function checkLabelPassword() {
    const labelPassword = document.querySelector(['label[for="password"]']);
    if (!labelPassword) {
        errorsArray.push('Password label is missing');
    }
}

function checkInputPassword() {
    const inputPassword = document.querySelector(['input[type="password"][name="password"][required]']);
    if (!inputPassword) {
        errorsArray.push('Password input is missing or is incorrect');

    }
}

function checkLabelConfirmPassword() {
    const labelConfirmPassword = document.querySelector(['label[for="confirm_password"]']);
    if (!labelConfirmPassword) {
        errorsArray.push('Confirm password label is missing');
    }
}

function checkInputConfirmPassword() {
    const inputConfirmPassword = document.querySelector(['input[type="password"][name="confirm_password"][required]']);
    if (!inputConfirmPassword) {
        errorsArray.push('Confirm password input is missing or is incorrect');
    }
}

function checkSubmitButton() {
    const submitButton = document.querySelector(['button[type="submit"]']);
    if (!submitButton) {
        errorsArray.push('Missing submit button')
    }
}

function checkResetButton() {
    const checkResetButton = document.querySelector(['button[type="reset"]']);
    if (!checkResetButton) {
        errorsArray.push('Missing reset button');
    }
}

function checkControlFormBtn() {
    const checkControlForm = document.querySelector(['button[type="button"][id="control-form"]']);
    if (!checkControlForm) {
        errorsArray.push('Missing control button');
    }
}

function checkLink() {
    const linkBtn = document.querySelector(["a[href='login.html']"]);
    if (!linkBtn) {
        errorsArray.push('link to login is missing or invalid');
    }
}

function setValidationsResult() {
    const validationsResults = document.getElementById("ValidationsResults");
    validationsResults.style['display'] = 'block';

    if (errorsArray.length === 0) {
        validationsResults.innerHTML += '<p>Every validation has passed</p>';
    } else {
        for (let i = 0; i < errorsArray.length; i++) {
            validationsResults.innerHTML += '<li>' + errorsArray[i] + '</li>';

        }
    }
}

checkForm();

checkLabelFullName();
checkInputFullName();

checkInputEmail();
checkLabelEmail();

checkLabelPassword();
checkInputPassword();

checkLabelConfirmPassword();
checkInputConfirmPassword();

checkSubmitButton();
checkResetButton();
checkControlFormBtn();
checkLink();

setValidationsResult();
