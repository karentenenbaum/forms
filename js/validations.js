document.getElementById('fullNameInput').addEventListener('blur', (e) => {
    validationFullName(e);
});

document.getElementById('fullNameInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkFullName');
});

function validationFullName(e) {
    const value = e.target.value;
    const regex = new RegExp('^(?=.*[A-Za-z])(?=.* )[A-Za-z ]{6,}$');

    if (!regex.test(value)) {
        const checkElement = document.getElementById('checkFullName');
        checkElement.innerHTML = "Full Name field must have more than 6 letters and at least one space in between.";
        checkElement.style.display = 'block';
    }
}

function checkMessageDissapears(e, field) {
    const checkMessage = document.getElementById(field);
    checkMessage.style.display = 'none';
}

document.getElementById('emailInput').addEventListener('blur', (e) => {
    validationEmail(e);
});

function validationEmail(e) {
    const value = e.target.value;
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if (!regex.test(value)) {
        const checkElementOne = document.getElementById('checkEmail');
        checkElementOne.innerHTML = "E-mail field must have a valid email format";
        checkElementOne.style.display = 'block';
    }
}

document.getElementById('emailInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkEmail');
});


document.getElementById('passwordInput').addEventListener('blur', (e) => {
    validationPassword(e);
});

function validationPassword(e) {
    const value = e.target.value;
    const regex = new RegExp('[A-Za-z0-9]{8,}');
    if (!regex.test(value)) {
        const checkElementTwo = document.getElementById("checkPassword");
        checkElementTwo.innerHTML = "Password field must contain at least 8 characters, consisting of letters and numbers.";
        checkElementTwo.style.display = 'block';

    }
}

document.getElementById('passwordInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e,'checkPassword');
});



function validationConfirmPassword(e) {
    const passwordValue = document.getElementById('passwordInput').value;
    const confirmPasswordValue = document.getElementById('confirmPasswordInput').value;

    if (!passwordValue === confirmPasswordValue) {
        const checkelementThree = document.getElementById('confirmPasswordImput');
        checkElementThree.innerHTML = "Password confirmation field must be equal to the content of the Password input.";
        checkElementThree.style.display = 'block';
    }

}

document.getElementById('confirmPasswordInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkConfirmPassword');
});

document.getElementById('signUpButton').addEventListener('click', (e) => {
    showValues(e);
});

function showValues(e) {
    const valuesToShow = document.getElementById('ValidationsResults');
    valuesToShow.innerHTML = null;
    valuesToShow.innerHTML= document.getElementById('fullNameInput').value;
    valuesToShow.innerHTML= document.getElementById('emailInput').value;
    valuesToShow.innerHTML= document.getElementById('passwordInput').value;
    valuesToShow.innerHTML= document.getElementById('confirmPasswordInput').value;
}