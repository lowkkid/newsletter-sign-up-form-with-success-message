const input = document.getElementById('email');
const errorMessage = document.getElementById('email-error-msg');
const success = document.getElementById('success');
const subscribe = document.getElementById('subscribe');

const subscribeBtn = document.getElementById('subscribe-btn');
const dismissBtn = document.getElementById('dismiss');
let shouldShowError = false;

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    success.classList.toggle('hidden');
    success.classList.toggle('flex');
    subscribe.classList.toggle('hidden');
    subscribe.classList.toggle('flex');

})

dismissBtn.addEventListener('click', (e) => {
    success.classList.toggle('hidden');
    success.classList.toggle('flex');
    subscribe.classList.toggle('hidden');
    subscribe.classList.toggle('flex');
})

input.addEventListener('blur', () => {
    shouldShowError = true;
    validate();
});

input.addEventListener('input', () => {
    validate();
});

function validate() {
    const isValid = validateEmail(input.value);
    if (!isValid && shouldShowError) {
        showErrorState();
    } else if (isValid) {
        showValidState();
    }
}

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