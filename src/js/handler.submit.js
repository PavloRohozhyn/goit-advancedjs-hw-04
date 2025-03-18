import { Err } from './tools';
import getData from './pixabay-api';
import { render, showLoader, showLoadMoreBtn } from './render-functions';
import { refs, pagination } from './consts';

// grab data from event
const grabDataFrom = event => {
  const formData = new FormData(event.target.form); // submit
  // when we change search target - car (has more then 1 page), ssd (has only one )
  const oldValue = localStorage.getItem('q-data');
  const newValue = formData.get('search');
  if (oldValue && oldValue !== newValue) {
    pagination.page = 1;
  }
  localStorage.setItem('q-data', newValue); // store query str
  return Object.fromEntries(formData);
};

// Search handler Btn
const handleSubmitBtn = event => {
  showLoadMoreBtn(false); // hide load more btn
  event.preventDefault();
  const formProps = grabDataFrom(event);
  if (!formProps.search) {
    return Err(
      'error',
      'Sorry, there are no images matching your search query. Please try again!'
    ); // disable empty search
  } else {
    showLoader(true);
  }
  refs.gallery.innerHTML = ''; // clear content
  const main = refs.loader;
  pagination.page = 1; // all search query began from 1!
  getData(formProps.search)
    .then(res => {
      const total = Math.ceil(res.data.totalHits / pagination.per_page);
      if (res.status != 200) {
        return Err('error', 'Server response fail');
      } // <- ( code above ) check response from api
      if (pagination.page > total) {
        pagination.page = 1;
        return Err('error', "We're sorry, there are no more posts to load");
      } // check end connection
      main.innerHtml = render(res.data); // render
      setTimeout(() => showLoadMoreBtn(true), 1000); // show load more btn)
      pagination.page += 1; // next images group
    })
    .catch(e => {
      return Err('error', e.message);
    });
};

export { handleSubmitBtn };
