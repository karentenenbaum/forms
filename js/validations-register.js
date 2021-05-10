document.getElementById('fullNameInput').addEventListener('blur', (e) => {
    validationFullName(e.target.value);
});

document.getElementById('fullNameInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkFullName');
});

document.getElementById('emailInput').addEventListener('blur', (e) => {
    validationEmail(e.target.value);
});

document.getElementById('emailInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkEmail');
});

document.getElementById('passwordInput').addEventListener('blur', (e) => {
    validationPassword(e.target.value);
});

document.getElementById('passwordInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkPassword');
});

document.getElementById('confirmPasswordInput').addEventListener('blur', (e) => {
    validationConfirmPassword(e.target.value, 'checkConfirmPassword');
});

document.getElementById('confirmPasswordInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkConfirmPassword');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    //showValues();

    const fullNameValidation = validationFullName(document.getElementById('fullNameInput').value);
    const emailValidation = validationEmail(document.getElementById('emailInput').value);
    const passwordValidation = validationPassword(document.getElementById('passwordInput').value);
    const confirmPasswordValidation = validationConfirmPassword(document.getElementById('confirmPasswordInput').value);

    if(fullNameValidation && emailValidation && passwordValidation && confirmPasswordValidation) {
        handleRegister();
    }
});

function validationFullName(e) {
    const value = e;
    const regex = new RegExp('^(?=.*[A-Za-z])(?=.* )[A-Za-z ]{6,}$');

    if (!regex.test(value)) {
        const checkElement = document.getElementById('checkFullName');
        checkElement.innerHTML = "Full Name field must have more than 6 letters and at least one space in between.";
        checkElement.style.display = 'block';

        return false;
    }

    return true;
}

function checkMessageDissapears(e, field) {
    const checkMessage = document.getElementById(field);
    checkMessage.style.display = 'none';
}

function validationEmail(e) {
    const value = e;
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if (!regex.test(value)) {
        const checkElementOne = document.getElementById('checkEmail');
        checkElementOne.innerHTML = "E-mail field must have a valid email format";
        checkElementOne.style.display = 'block';
        return false;
    }

    return true;
}

function validationPassword(e) {
    const value = e;
    const regex = new RegExp('[A-Za-z0-9]{8,}');
    if (!regex.test(value)) {
        const checkElementTwo = document.getElementById("checkPassword");
        checkElementTwo.innerHTML = "Password field must contain at least 8 characters, consisting of letters and numbers.";
        checkElementTwo.style.display = 'block';

        return false;
    }

    return true;


}

function validationConfirmPassword(e) {
    const passwordValue = document.getElementById('passwordInput').value;
    const confirmPasswordValue = document.getElementById('confirmPasswordInput').value;

    if (passwordValue !== confirmPasswordValue) {
        const checkElementThree = document.getElementById('checkConfirmPassword');
        checkElementThree.innerHTML = "Password confirmation field must be equal to the content of the Password input.";
        checkElementThree.style.display = 'block';

        return false;
    }

    return true;
}

function showValues() {
    const fullNameValue = document.getElementById('fullNameInput').value;
    const emailValue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;
    const confirmPasswordValue = document.getElementById('confirmPasswordInput').value;

    const valuesToShow = document.getElementById('ValidationsResults');
    valuesToShow.innerHTML = null;
    valuesToShow.innerHTML =
        `<ul>
            <li>Fullname: ${fullNameValue}</li>
            <li>Email: ${emailValue}</li>
            <li>Password: ${passwordValue}</li>
            <li>Confirm: ${confirmPasswordValue}</li>
        </ul>`;
}

function handleRegister() {
    const fullNameValue = document.getElementById('fullNameInput').value;
    const emailvalue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;
    fetch(`http://localhost:4000/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname: fullNameValue,
            email: emailvalue,
            password: passwordValue
        })
    })
        .then((e) => {
            console.log(e);
            console.log('valid credentials');
            document.getElementById('credentials-valid').style.display = 'block';
        })
        .catch(() => {
            console.log('invalid credentials');
            document.getElementById('credentials-invalid').style.display = 'block';
        })
}