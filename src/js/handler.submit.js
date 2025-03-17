import { Err } from './tools';
import getData from './pixabay-api';
import { render, showLoader, showLoadMoreBtn } from './render-functions';
import { pagination } from './consts';

// grab data from event
const grabDataFrom = event => {
  const formData = new FormData(event.target.form); // submit
  localStorage.setItem('q-data', formData); // store query str
  return Object.fromEntries(formData);
};

// Search handler Btn
const handleSubmitBtn = event => {
  event.preventDefault();
  const formProps = grabDataFrom(event);
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
};

export { handleSubmitBtn };
