let errorsArray = [];
checkForm();
checkLabelFullName();
checkInputFullName();
checkLabelEmail();
checkLabelPassword()
checkInputPassword();
checkLabelConfirmPassword();
checkSubmitButton()

function checkForm() {
    const formElement = document.getElementsByTagName("form")[0];
    if (!formElement) {
        errorsArray.push('form is not found');
    }
}
function checkLabelFullName() {
    const labelFullName = document.querySelector('label[for="full_name"]');
    if (!labelFullName) {
        errorsArray.push('Full name label is missing');
    }
}
function checkInputFullName() {
    const inputFullName = document.querySelector(['input[type="text"][id="fullName"][required]']);
    if (!inputFullName) {
        errorsArray.push('Full name input is missing');

    }
}
function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="e-mail"]']);
    if (!labelEmail) {
        errorsArray.push('E-mail label is missing ');
    }
}
function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="e-mail"][name=e-mail][required]']);
    if (!inputEmail) {
        errorsArray.push('E-mail input is missing');
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
        errorsArray.push('Password input is missing');

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
        errorsArray.push('Confirm password input is missing');
    }
}

function checkSubmitButton() {
    const submitButton = document.querySelector(['button[type="submit"]']);
    if (!submitbutton) {
        errorsArray.push('Missing submit button')
    }
}

const ValidationsResults = document.getElementById("ValidationsResults">);
if(errorsArray === 0){
    document.appendChild('Every validation has passed');
} else(
    document.appendChild('')
 )    
}
