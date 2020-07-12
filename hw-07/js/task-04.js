const counterValRef = document.querySelector('#value');
const counter = document.querySelector('#counter');

let counterValue = +counterValRef.textContent;

const counterFunc = (event) => {
    if (event.target.dataset.action === 'increment') {
        counterValue += 1;
        counterValRef.textContent = counterValue;
    } else {
        counterValue -= 1;
        counterValRef.textContent = counterValue;
    }
}

counter.addEventListener('click', counterFunc);
counter.addEventListener('click', counterFunc);