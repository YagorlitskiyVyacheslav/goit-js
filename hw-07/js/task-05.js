const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const nameChange = () => {
    nameInputRef.value === '' ? nameOutputRef.textContent = 'незнакомец' : nameOutputRef.textContent = nameInputRef.value;
} 

nameInputRef.addEventListener('input', nameChange);