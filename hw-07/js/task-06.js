const inputRef = document.querySelector("#validation-input");

const dataLength = +inputRef.dataset.length;

const verification = (event) => {
    if (event.type === 'blur') {
        counterValRef.textContent = event.target.dataset.action === 'increment' ? counterValue += 1 : counterValue -= 1;
    } else {
        inputRef.className = '';
    }
}

inputRef.addEventListener('blur', verification);
inputRef.addEventListener('focus', verification);