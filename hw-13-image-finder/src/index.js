import './style/font-awesome-4.7.0/css/font-awesome.min.css';
import './styles.css';

import fetchImage from './js/fetch-image';
import refs from './js/refs';
import markup from './js/markup';

refs.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchImage.clearContainer();
    const formValue = e.currentTarget.elements.query.value;
    fetchImage.getImage(formValue).then(data => {
        markup(data)
    });
    fetchImage.query = formValue;
})

refs.loadMore.addEventListener('click', (e) => {
    e.preventDefault()
    const formValue = fetchImage.query;
    if(formValue === '') return;
    fetchImage.pageIncrement();
    const heightPage =
      document.documentElement.scrollHeight - 50;
    
    fetchImage.getImage(formValue).then(data => {
        markup(data);
        window.scrollTo({
          top: heightPage,
          behavior: 'smooth',
        });
    });
})


