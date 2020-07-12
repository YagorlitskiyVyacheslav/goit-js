import imageAray from './gallery-items.js';
const galleryRef = document.querySelector('.gallery');
const modalWindowRef = {
    lightbox: document.querySelector('.lightbox'),
    overlay: document.querySelector('.lightbox__overlay'),
    content: document.querySelector('.lightbox__content'),
    image: document.querySelector('.lightbox__image'),
    button: document.querySelector('.lightbox__button'),
};

let index = 1;

const creatingMarkup = ({preview, original, description}) => {
    const galleryItem = document.createElement('li');
    const galleryImg = document.createElement('img');
    galleryImg.src = preview;
    galleryImg.alt = description;
    galleryImg.dataset.source = original;
    galleryImg.dataset.index = index;
    index += 1;
    galleryItem.appendChild(galleryImg);
    return galleryItem;
};
const renderingMarkup = (items) => {
    const markupHTML = items.map(item => creatingMarkup(item));

    galleryRef.append(...markupHTML);
};
renderingMarkup(imageAray);

const modalWindowOffOnClick = (event) => {
    if ([...event.currentTarget.classList].indexOf('gallery') !== -1) {
        modalWindowRef.image.src = event.target.dataset.source;
        modalWindowRef.lightbox.classList.add('is-open');
    } else if ([...event.target.classList].indexOf('lightbox__image') !== -1) {} else { 
        modalWindowRef.image.src = '';
        modalWindowRef.lightbox.classList.remove('is-open');
    }
};
const modalWindowOffEscape = (event) => {
    if (event.code === 'Escape') {
        modalWindowRef.image.src = '';
        modalWindowRef.lightbox.classList.remove('is-open');
    }
};
const rewindArrows = (images, index) => {
    document.addEventListener('keyup', (event) => {
        if (event.code === 'ArrowRight') {
            index = +index + 1;
        } else if (event.code === 'ArrowLeft') {
            index = +index - 1;
        }
        if (index > 9) {
            index = 1;
        } else if (index < 1) {
            index = 1;
        }
        images.forEach(image => {
            if (+image.dataset.index === index) {
                modalWindowRef.image.src = image.dataset.source;
            }
        });
    });
}

galleryRef.addEventListener('click', modalWindowOffOnClick);
modalWindowRef.lightbox.addEventListener('click', modalWindowOffOnClick);
document.addEventListener('keyup', modalWindowOffEscape);

galleryRef.addEventListener('click', (event) => {
    let index = event.target.dataset.index;
    const images = [...galleryRef.querySelectorAll('img')];
    rewindArrows(images, index);
});
