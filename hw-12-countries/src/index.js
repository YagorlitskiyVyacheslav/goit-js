import './styles.css';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

var debounce = require('lodash.debounce');

refs.searchForm.addEventListener(
  'input',
  debounce(e => {
    refs.counrtyContainer.innerHTML = '';
    fetchCountries(e.target.value);
    refs.spiner.classList.remove('loader');
  }, 1000),
);
refs.searchForm.addEventListener(
  'input', () => {
    refs.spiner.classList.add('loader');
  }
);