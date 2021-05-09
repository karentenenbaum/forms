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

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    //showValues();

    const emailValidation = validationEmail(document.getElementById('emailInput').value);
    const passwordValidation = validationPassword(document.getElementById('passwordInput').value);

    if (emailValidation && passwordValidation) {
        handleLogin();
    }
});


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

    return  true;
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

    return  true;
}

function showValues() {
    const emailValue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;

    const valuesToShow = document.getElementById('ValidationsResults');
    valuesToShow.innerHTML = null;
    valuesToShow.innerHTML =
        `<ul>
            <li>Email: ${emailValue}</li>
            <li>Password: ${passwordValue}</li>
        </ul>`;
}

function handleLogin() {
    const emailvalue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;

    fetch(`http://localhost:4000/login`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailvalue,
            password: passwordValue
        })
    })
        .then((e) => {
            console.log(e);
            console.log('valid');
            document.getElementById('credentials-valid').style.display = 'block';
        })
        .catch(() => {
            console.log('invalid password');
            document.getElementById('credentials-invalid').style.display = 'block';
        })
}