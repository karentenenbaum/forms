document.getElementById('control-form').addEventListener('click', function() {
    let errorsArray = [];

    checkForm(errorsArray, "form", 'form is not found');

    checkLabelFullName(errorsArray);
    checkInputFullName(errorsArray);

    checkInputEmail(errorsArray);
    checkLabelEmail(errorsArray);

    checkLabelPassword(errorsArray);
    checkInputPassword(errorsArray);

    checkLabelConfirmPassword(errorsArray);
    checkInputConfirmPassword(errorsArray);

    checkSubmitButton(errorsArray);
    checkResetButton(errorsArray);
    checkControlFormBtn(errorsArray);
    checkLink(errorsArray);

    setValidationsResult(errorsArray);
});


function checkForm(errorsArray, querySelector, message) {
    const formElement = document.querySelector("form");
    if (!formElement) {
        errorsArray.push('message');
    }
}

function checkLabelFullName(errorsArray) {
    const labelFullName = document.querySelector('label[for="full_name"]');
    if (!labelFullName) {
        errorsArray.push('Full name label is missing');
    }
}

function checkInputFullName(errorsArray) {
    const inputFullName = document.querySelector(['input[type="text"][name="full_name"][required]']);
    if (!inputFullName) {
        errorsArray.push('Full name input is missing or is incorrect');

    }
}

function checkLabelEmail(errorsArray) {
    const labelEmail = document.querySelector(['label[for="email"]']);
    if (!labelEmail) {
        errorsArray.push('E-mail label is missing');
    }
}

function checkInputEmail(errorsArray) {
    const inputEmail = document.querySelector(['input[type="email"][name="email"][required]']);
    if (!inputEmail) {
        errorsArray.push('E-mail input is missing or is incorrect');
    }
}

function checkLabelPassword(errorsArray) {
    const labelPassword = document.querySelector(['label[for="password"]']);
    if (!labelPassword) {
        errorsArray.push('Password label is missing');
    }
}

function checkInputPassword(errorsArray) {
    const inputPassword = document.querySelector(['input[type="password"][name="password"][required]']);
    if (!inputPassword) {
        errorsArray.push('Password input is missing or is incorrect');

    }
}

function checkLabelConfirmPassword(errorsArray) {
    const labelConfirmPassword = document.querySelector(['label[for="confirm_password"]']);
    if (!labelConfirmPassword) {
        errorsArray.push('Confirm password label is missing');
    }
}

function checkInputConfirmPassword(errorsArray) {
    const inputConfirmPassword = document.querySelector(['input[type="password"][name="confirm_password"][required]']);
    if (!inputConfirmPassword) {
        errorsArray.push('Confirm password input is missing or is incorrect');
    }
}

function checkSubmitButton(errorsArray) {
    const submitButton = document.querySelector(['button[type="submit"]']);
    if (!submitButton) {
        errorsArray.push('Missing submit button')
    }
}

function checkResetButton(errorsArray) {
    const checkResetButton = document.querySelector(['button[type="reset"]']);
    if (!checkResetButton) {
        errorsArray.push('Missing reset button');
    }
}

function checkControlFormBtn(errorsArray) {
    const checkControlForm = document.querySelector(['button[type="button"][id="control-form"]']);
    if (!checkControlForm) {
        errorsArray.push('Missing control button');
    }
}

function checkLink() {
    const linkBtn = document.querySelector(["a[href='login.html']"]);
    if(!linkBtn) {
        errorsArray.push('link to login is missing or invalid');
    }
}


function setValidationsResult(errorsArray) {
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

