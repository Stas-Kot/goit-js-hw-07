const ref = {
    inputEl: document.querySelector('#name-input'),
    nameSpan: document.querySelector('#name-output')
};


ref.inputEl.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        ref.nameSpan.textContent = 'незнакомец'
    } else {
        ref.nameSpan.textContent = event.currentTarget.value
    };
};