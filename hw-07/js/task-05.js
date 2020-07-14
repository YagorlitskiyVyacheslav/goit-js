const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const nameChange = () => {
    if (nameInputRef.value === '') {
        nameOutputRef.textContent = 'незнакомец';
    } else {
        nameOutputRef.textContent = nameInputRef.value;
    }
} 

nameInputRef.addEventListener('input', nameChange);