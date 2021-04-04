const incrementEl = document.querySelector('[data-action="increment"]');
const decrementEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0

const onIncrementBtnClick = function () {
    return valueEl.textContent = counterValue += 1
};
const onDecrementBtnClick = function () {
    return valueEl.textContent = counterValue -= 1
};

incrementEl.addEventListener('click', onIncrementBtnClick);
decrementEl.addEventListener('click', onDecrementBtnClick);