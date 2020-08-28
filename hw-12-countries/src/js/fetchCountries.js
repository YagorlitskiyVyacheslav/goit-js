import markupCountry from './markup';
import templatesOneCounry from '../templates/templatesOneCounry.hbs';
import templateCountryList from '../templates/templateCountryList.hbs';
import templateWarn from '../templates/templateWarn.hbs';

function sampleOfCountries(countries) {
  if (countries.length === 1) {
      return markupCountry(countries, templatesOneCounry);
  } else if (countries.length > 1 && countries.length <= 10) {
      return markupCountry(countries, templateCountryList);
  } else if (countries.length > 10) {
    return markupCountry(countries, templateWarn);
  }
}

function fetchCountries(queryCounrty) {
    const baseUrl = 'https://restcountries.eu/rest/v2/';

  return fetch(baseUrl + `name/${queryCounrty}`)
    .then(res => res.json())
    .then(country => {
        sampleOfCountries(country);
    })
    .catch(err => err);
}

export default fetchCountries;