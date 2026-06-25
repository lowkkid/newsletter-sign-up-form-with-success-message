const form = document.getElementById('form');
const input = document.getElementById('email');
const errorMessage = document.getElementById('email-error-msg');
const subscribeBtn = document.getElementById('subscribe');

let shouldShowError = false;

input.addEventListener('blur', () => {
    shouldShowError = true;
});

input.addEventListener('input', () => {
    const isValid = validateEmail(input.value);
    if (!isValid && shouldShowError) {
        showErrorState();
    } else if (isValid) {
        showValidState();
    }
});

function showErrorState() {
    errorMessage.classList.remove('hidden');
    subscribeBtn.disabled = true;
    input.classList.add('is-failed')
}

function showValidState() {
    errorMessage.classList.add('hidden');
    subscribeBtn.disabled = false;
    input.classList.remove('is-failed');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .trim()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};