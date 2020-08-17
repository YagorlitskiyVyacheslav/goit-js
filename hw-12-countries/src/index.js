import './styles.css';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

// console.log(fetchCountries('eesti'))

refs.searchForm.addEventListener('input', (e) => {
    refs.counrtyContainer.innerHTML = '';
    // console.log(e.target.value)
    fetchCountries(e.target.value)
})



