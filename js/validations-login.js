document.getElementById('emailInput').addEventListener('blur', (e) => {
    validationEmail(e);
});

document.getElementById('emailInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkEmail');
});

document.getElementById('passwordInput').addEventListener('blur', (e) => {
    validationPassword(e);
});

document.getElementById('passwordInput').addEventListener('focus', (e) => {
    checkMessageDissapears(e, 'checkPassword');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showValues();
    sendRequest();
});


function checkMessageDissapears(e, field) {
    const checkMessage = document.getElementById(field);
    checkMessage.style.display = 'none';
}

function validationEmail(e) {
    const value = e.target.value;
    const regex = new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$');
    if (!regex.test(value)) {
        const checkElementOne = document.getElementById('checkEmail');
        checkElementOne.innerHTML = "E-mail field must have a valid email format";
        checkElementOne.style.display = 'block';
    }
}

function validationPassword(e) {
    const value = e.target.value;
    const regex = new RegExp('[A-Za-z0-9]{8,}');
    if (!regex.test(value)) {
        const checkElementTwo = document.getElementById("checkPassword");
        checkElementTwo.innerHTML = "Password field must contain at least 8 characters, consisting of letters and numbers.";
        checkElementTwo.style.display = 'block';

    }
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

function sendRequest() {
    const emailvalue = document.getElementById('emailInput').value;
    fetch(`https://jsonplaceholder.typicode.com/users?email=${emailvalue}`, {
        method: 'GET'
    })
        .then((e) => console.log(e));
}