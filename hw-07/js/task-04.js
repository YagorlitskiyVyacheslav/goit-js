const counterValRef = document.querySelector('#value');
const counter = document.querySelector('#counter');

let counterValue = +counterValRef.textContent;

const counterFunc = (event) => {
    counterValRef.textContent = event.target.dataset.action === 'increment' ? ++counterValue: --counterValue;
}

counter.addEventListener('click', counterFunc);
counter.addEventListener('click', counterFunc);