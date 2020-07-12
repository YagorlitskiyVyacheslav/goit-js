const inputRef = document.querySelector("#validation-input");

const dataLength = +inputRef.dataset.length;

const verification = (event) => {
    if (event.type === 'blur') {
        dataLength === inputRef.value.length ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
    } else {
        inputRef.className = '';
    }
    console.log(inputRef.className)
    // if (inputRef.classList.contains)
}

inputRef.addEventListener('blur', verification);
inputRef.addEventListener('focus', verification);