import './style/font-awesome-4.7.0/css/font-awesome.min.css';
import './styles.css';

import fetchImage from './js/fetch-image';
import refs from './js/refs';
import markup from './js/markup';
import notification from './js/pnotify';


refs.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    refs.spiner.classList.add('display-block');
    fetchImage.clearContainer();
    const formValue = e.currentTarget.elements.query.value;
    fetchImage.getImage(formValue).then(data => {
         if (data.length === 0) {
           refs.spiner.classList.remove('display-block');
           return notification.error();
         }
        notification.successSearch(formValue, data.length);
        markup(data);
        refs.spiner.classList.remove('display-block');
    });
    fetchImage.query = formValue;
  refs.loadMore.classList.add('display-block');
})

refs.loadMore.addEventListener('click', (e) => {
    e.preventDefault()
    const formValue = fetchImage.query;
    if(formValue === '') return;
    fetchImage.pageIncrement();
    const heightPage =
      document.documentElement.scrollHeight - 50;
    refs.spiner.classList.add('display-block');
    fetchImage.getImage(formValue).then(data => {
        if (data.length === 0) {
          refs.spiner.classList.remove('display-block');
          return notification.error();
        }
        notification.successLoad(formValue, data.length)
        markup(data);
        window.scrollTo({
          top: heightPage,
          behavior: 'smooth',
        });
        refs.spiner.classList.remove('display-block');
    });
})

