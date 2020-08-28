import './styles.css';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import markupCountry from './js/markup';
import templatesOneCounry from './templates/templatesOneCounry.hbs';
import templateCountryList from './templates/templateCountryList.hbs';
import templateWarn from './templates/templateWarn.hbs';

var debounce = require('lodash.debounce');

function sampleOfCountries(countries) {
  if (countries.length === 1) {
    return markupCountry(countries, templatesOneCounry);
  } else if (countries.length > 1 && countries.length <= 10) {
    return markupCountry(countries, templateCountryList);
  } else if (countries.length > 10) {
    return markupCountry(countries, templateWarn);
  }
}

refs.searchForm.addEventListener(
  'input',
  debounce(e => {
    refs.counrtyContainer.innerHTML = '';
    fetchCountries(e.target.value).then(country => {
      sampleOfCountries(country);
    });
    refs.spiner.classList.remove('loader');
  }, 1000),
);
refs.searchForm.addEventListener(
  'input', () => {
    refs.spiner.classList.add('loader');
  }
);
refs.counrtyContainer.addEventListener('click', debounce(e => {
  if (e.target.className === 'country-item') {
    fetchCountries(e.target.innerHTML).then(country => {
      country.forEach((item) => {
        if (e.target.innerHTML === item.name) {
          sampleOfCountries([item]);
          refs.spiner.classList.remove('loader');
        }
      })
    })
  }
}, 1000))
refs.counrtyContainer.addEventListener('click', (e) => {
  if (e.target.className === 'country-item') {
    refs.counrtyContainer.innerHTML = '';
    refs.spiner.classList.add('loader');
  }
})