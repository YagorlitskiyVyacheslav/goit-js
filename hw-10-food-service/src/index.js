import './styles.css';

// Markup on template 
import menuData from './menu.json';
import menuTemplate from './templates/menu.hbs';

const markup = menuTemplate(menuData);

// Module Local Storage
import storage from './js/localStorage.js';

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);


// Add theme

const switchInputRef = document.querySelector('.switch__input');

switchInputRef.addEventListener('click', () => {
    document.body.className = '';
    document.body.classList.add(switchInputRef.checked ? 'dark-theme' : 'light-theme');

    const pageTheme = document.body.className;
    storage.save('theme', pageTheme);
})

document.addEventListener('DOMContentLoaded', () => {
    if (storage.load('theme') === 'dark-theme') {
        switchInputRef.checked = true;
    };
    document.body.classList.add(storage.load('theme'));
});