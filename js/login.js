let errorsArray = [];

checkForm();
checkLabelEmail();
checkInputEmail();
checkLabelPassword()
checkInputPassword();
checkLoginButton()

function checkForm() {
    const formElement = document.getElementsByTagName("form")[0];
    if (!formElement) {
        errorsArray.push('form is not found');
    }
}

function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="e-mail"]']);
    if (!labelEmail) {
        errorsArray.push('E-mail label is missing');
    }
}
function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="e-mail"][name=e-mail][required]']);
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

function checkLoginButton() {
    const loginButton = document.querySelector(['button[type="submit"]']);
    if (!loginButton) {
        errorsArray.push('Missing submit button');
    }
}

const ValidationsResults = document.getElementById("ValidationsResults");
ValidationsResults.style['display'] = 'block';

if(errorsArray.length === 0) {
    ValidationsResults.innerHTML += '<p>Every validation has passed</p>';
} else {
    for(let i = 0; i< errorsArray.length; i++) {
       console.log(errorsArray[i]);
       ValidationsResults.innerHTML += '<p>' + errorsArray[i] + '<p>';
        
    } 
    

}
