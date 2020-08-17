import refs from './refs';

const markupCountry = function (country, template) {
    const markup = template(country);
    refs.counrtyContainer.insertAdjacentHTML('beforeend', markup)
}
export default markupCountry;

