import { Err } from './js/tools';
import getData from './js/pixabay-api';
import { render, showLoader, showLoadMoreBtn } from './js/render-functions';
import { pagination } from './js/consts';

showLoader(false); // remove loader
showLoadMoreBtn(false); // remove load more btn
// Search handler Btn
document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  if (!formProps.search) {
    showLoadMoreBtn(false);
    showLoader(false);
    return Err(
      'error',
      'Sorry, there are no images matching your search query. Please try again!'
    );
  } else {
    showLoader(true);
  }
  document.querySelector('ul.gallery').innerHTML = ''; // clear content
  const main = document.querySelector('span.loader');
  getData(formProps.search)
    .then(res => {
      const total = Math.ceil(res.data.totalHits / pagination.per_page);
      if (res.status != 200) {
        return Err('error', 'Server response fail'); // check
      }
      if (pagination.page > total) {
        showLoadMoreBtn(false);
        showLoader(false);
        return Err('error', "We're sorry, there are no more posts to load"); // load posts
      }
      main.innerHtml = render(res.data); // render
      pagination.page += 1; // next page (group)
    })
    .catch(e => {
      showLoader(false); // remove loader
      return Err('error', e.message);
    });
});

// Load More Btn
document.querySelector('.load-more-btn').addEventListener('submit', event => {
  const main = document.querySelector('span.loader');
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  getData(formProps.search)
    .then(res => {
      const total = Math.ceil(res.data.totalHits / pagination.per_page);
      if (res.status != 200) {
        return Err('error', 'Server response fail'); // check
      }
      if (pagination.page > total) {
        showLoadMoreBtn(false);
        return Err('error', "We're sorry, there are no more posts to load"); // load posts
      }
      main.innerHtml = render(res.data); // render
      pagination.page += 1; // next page (group)
    })
    .catch(e => {
      showLoader(false); // remove loader
      return Err('error', e.message);
    });
});
