const fontSizeControlEl = document.querySelector('#font-size-control');
console.log(fontSizeControlEl);
const textEl = document.querySelector('#text')

fontSizeControlEl.addEventListener('input', onInputChange);
function onInputChange(event) {
    textEl.style.fontSize = event.currentTarget.value + "px";
};
