import template from '../template/galery.hbs'
import refs from './refs';
import * as basicLightbox from 'basiclightbox'
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css'

export default (data) => {
    const markup = template(data);
    refs.imageContainer.insertAdjacentHTML('beforeend', markup)
    const galeryImg = document.querySelector('.galery');
    galeryImg.addEventListener('click', (e) => {
      const largeImg = e.target.dataset.source;
      const instance = basicLightbox.create(`<img src="${largeImg}" width="800" height="600">`);
      console.dir(instance.show())
      instance.show();
    })
}