import refs from './refs';

const apiKey = '17953661-fbb86eb9264530d2720389de2'


export default {
    page: 1, 
    searchQuery: '',
    getImage (query) {
        const baseUrl = `https://pixabay.com/api/`;
        const params = `?image_type=photo&orientation=horizontal&q=${query}&page=${this.page}&per_page=12&key=${apiKey}`

        return fetch(baseUrl + params)
        .then(res => res.json())
        .then(data => data.hits)
        .catch(err => err)
    },
    pageIncrement() {
        this.page += 1;
    },
    clearContainer () {
        refs.imageContainer.innerHTML = '';
    },
    get query() {
        return this.searchQuery;
      },
    set query(value) {
        this.searchQuery = value;
      },
}