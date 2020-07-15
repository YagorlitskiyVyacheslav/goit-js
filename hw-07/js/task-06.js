const inputRef = document.querySelector("#validation-input");


const verification = (event) => {
    const dataLength = +inputRef.dataset.length;
    if (event.type === 'blur') {
        if (inputRef.value.length === dataLength) {
            inputRef.classList.add('valid');
        } else {
            inputRef.classList.add('invalid');
        }
    } else {
        inputRef.className = '';
    }
}

inputRef.addEventListener('blur', verification);
inputRef.addEventListener('focus', verification);