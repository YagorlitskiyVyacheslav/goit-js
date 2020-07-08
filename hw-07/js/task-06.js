const inputRef = document.querySelector("#validation-input");

const dataLength = +inputRef.dataset.length;

const verification = () => dataLength === inputRef.value.length ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');

inputRef.addEventListener('blur', verification);