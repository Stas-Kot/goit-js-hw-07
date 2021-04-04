const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputText = event.currentTarget.value.length;
    
    if (inputText === Number(inputEl.getAttribute('data-length'))) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid')
    } else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}
