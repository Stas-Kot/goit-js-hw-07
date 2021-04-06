const divControlsEl = document.getElementById('controls');
const divBoxesEl = document.getElementById('boxes');
const inputEl = divControlsEl.querySelector('input');
const destroyBtnEl = document.querySelector('[data-action="destroy"]');
const renderBtnEl = document.querySelector('[data-action="render"]');

const createBoxes = function (amount) {
    for (let i = 1; i <= amount; i += 1) {
        divBoxesEl.insertAdjacentHTML('beforeend', '<div class = "newDiv"></div>') 
    }
};
const onRenderBtnClick = function () {
    if (inputEl.value <= Number(inputEl.getAttribute('max'))) {
        createBoxes(inputEl.value);
    const divsEl = divBoxesEl.querySelectorAll('.newDiv');
    let size = 20;
    divsEl.forEach(element => {
        size += 10; 
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    });
    } else {
        inputEl.classList.add('invalid')
    };
function getRandom(min, max){
  return Math.ceil(Math.random() * ((max - min) + min))
    }
};
const ondestroyBtnClick = function() {
    divBoxesEl.innerHTML = '';
};
destroyBtnEl.addEventListener('click', ondestroyBtnClick);
renderBtnEl.addEventListener('click', onRenderBtnClick);
