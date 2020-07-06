const counter = document.querySelector('#value');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');

let counterValue = +counter.textContent;

const increment = () => {
    counterValue = counterValue + 1;
    counter.textContent = counterValue;
}
const decrement = () => {
    counterValue = counterValue - 1;
    counter.textContent = counterValue;
}

btnIncrement.addEventListener('click', increment);
btnDecrement.addEventListener('click', decrement);