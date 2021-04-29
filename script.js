// JS simple validation turd run v1.

const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//Yoinked from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function isValidEmail(enmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required.');
    } else {
        showSuccess(username);
    }
    if (email.value === '') {
        showError(email, 'Email is required.');
    } else if (!isValidEmail(email.value)) {
        showError(email, 'Email is Invalid.');
    } else {
        showSuccess(email);
    }
    if (password.value === '') {
        showError(password, 'A password is required.');
    } else {
        showSuccess(password);
    }
    if (password2.value === '') {
        showError(password2, 'Validating your password is required.');
    } else {
        showSuccess(password2);
    }
});

