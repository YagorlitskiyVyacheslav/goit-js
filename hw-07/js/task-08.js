const inputRef = document.querySelector('input[type="number"]');
const buttonRenderRef = document.querySelector('button[data-action="render"]');
const buttonDestroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');

let divWidthHeight = 30;

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const createBoxes = (amount) => {
    for (let i = 0; i < amount; i += 1) {
        const createDiv = document.createElement('div');
        boxesRef.appendChild(createDiv);
        createDiv.style.width = `${divWidthHeight}px`;
        createDiv.style.height = `${divWidthHeight}px`;
        createDiv.style.background = `rgb(${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)})`;
        divWidthHeight += 10;
    }
}
const destroyBoxes = () => {
    boxesRef.innerHTML = '';
    divWidthHeight = 30;
}

buttonRenderRef.addEventListener('click', () => {
    const amountInput = inputRef.value;
    createBoxes(amountInput);
});
buttonDestroyRef.addEventListener('click', destroyBoxes);