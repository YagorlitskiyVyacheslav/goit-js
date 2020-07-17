const inputRef = document.querySelector('input[type="number"]');
const buttonRenderRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let divWidthHeight = 30;

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createDiv = () => {
    const createDiv = document.createElement('div');
    createDiv.style.width = `${divWidthHeight}px`;
    createDiv.style.height = `${divWidthHeight}px`;
    createDiv.style.background = `rgb(${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)})`;
    divWidthHeight += 10;
    return createDiv;
}
const createBoxes = (amount) => {
    const divArray = [];

    for (let i = 0; i < amount; i += 1) {
        divArray.push(createDiv());
    }
    return divArray;
}
const destroyBoxes = () => {
    boxesRef.innerHTML = '';
    divWidthHeight = 30;
}

buttonRenderRef.addEventListener('click', () => {
    const amountInput = inputRef.value;
    boxesRef.append(...createBoxes(amountInput))
});
buttonDestroyRef.addEventListener('click', destroyBoxes);