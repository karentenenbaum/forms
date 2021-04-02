let errorsArray = [];



checkForm();

const labelFullName = document.querySelector('label[for="full_name"]');
if (!labelFullName) {
    errorsArray.push('Full name label is missing');
}

const inputFullName = document.querySelector(['input[type="text"][required]']);
if (!inputFullName) {
    errorsArray.push('Full name input is missing');
}

const labelEmail = document.querySelector(['label[for="e-mail"]']);
if(!labelEmail) {
    errorsArray.push('E-mail label is missing ');
}


const inputEmail = document.querySelector(['input[type="e-mail"][name=e-mail][required]']);
if(!inputEmail) {
    errorsArray.push('E-mail input is missing');
}

const labelPassword = document.querySelector(['label[for="password"]']);
if(!labelPassword) {
    errorsArray.push('Password label is missing');
}
const inputPassword = document.querySelector(['input[type="password"][name="password"][required]']);
if(!inputPassword){
    errorsArray.push('Password input is missing');
}
const labelConfirmPassword = document.querySelector(['label[for="confirm_password"]']);
if(!labelConfirmPassword) {
    errorsArray.push('Confirm password label is missing');
}

const inputConfirmPassword = document.querySelector(['input[type="password"][name="confirm_password"][required]']);
if(!inputConfirmPassword) {
    errorsArray.push('Confirm password input is missing');
}

const submitButton = document.querySelector(['button[type="submit"]']);
if(!submitbutton){
    errorsArray.push('Missing submit button')
}

function checkForm() {
    const formElement = document.getElementsByTagName("form")[0];
    if (!formElement) {
        errorsArray.push('form is not found');
    }
}

