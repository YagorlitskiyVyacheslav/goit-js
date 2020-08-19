import template from '../template/galery.hbs'
import refs from './refs';

export default (data) => {
    const markup = template(data);
    refs.imageContainer.insertAdjacentHTML('beforeend', markup)
}