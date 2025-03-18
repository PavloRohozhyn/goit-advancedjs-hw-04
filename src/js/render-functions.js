import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from './consts';
import { Err } from './tools';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Use the alt attribute of images for captions
  captionDelay: 250, // Delay in milliseconds before showing the caption
});

const render = data => {
  if (data && data.total > 0) {
    showLoader(false); // loader
    const markup = data.hits
      .map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
                width="350" 
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${downloads}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${comments}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${views}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${likes}</p>
              </li>
            </ul>
          </li>
          `
      )
      .join('');
    refs.gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh(); // refresh images
  } else {
    showLoader(false);
    showLoadMoreBtn(false);
    Err(
      'success',
      'Sorry, there are no images matching your search query. Please try again!'
    );
  }
};

const showLoader = (flag = true) => {
  const el = refs.loader;
  if (flag) {
    if (el.hasAttribute('style')) {
      el.removeAttribute('style');
    }
  } else {
    if (!el.hasAttribute('style')) {
      el.setAttribute('style', 'display:none');
    }
  }
};

const showLoadMoreBtn = (flag = true) => {
  const el = refs.loadMoreBtn;
  if (flag) {
    if (el.hasAttribute('style')) {
      el.removeAttribute('style');
    }
  } else {
    if (!el.hasAttribute('style')) {
      el.setAttribute('style', 'display:none');
    }
  }
};
export { render, showLoader, showLoadMoreBtn };
