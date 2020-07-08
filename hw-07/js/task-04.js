const counter = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = +counter.textContent;

const counterFunc = (event) => {
    if (event.target.dataset.action === 'increment') {
        counterValue += 1;
        counter.textContent = counterValue;
    } else {
        counterValue -= 1;
        counter.textContent = counterValue;
    }
}

btnIncrement.addEventListener('click', counterFunc);
btnDecrement.addEventListener('click', counterFunc);