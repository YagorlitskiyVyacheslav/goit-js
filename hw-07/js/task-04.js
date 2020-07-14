const counterValRef = document.querySelector('#value');
const counter = document.querySelector('#counter');

let counterValue = +counterValRef.textContent;

const counterFunc = (event) => {
    event.target.dataset.action === 'increment' ? counterValue += 1 : counterValue  -= 1;
    counterValRef.textContent = counterValue;
}

counter.addEventListener('click', counterFunc);
counter.addEventListener('click', counterFunc);