import { Err } from './tools';
import getData from './pixabay-api';
import { render, showLoader, showLoadMoreBtn } from './render-functions';
import { pagination } from './consts';

// Load More Btn
const handleClickBtn = event => {
  const search = localStorage.getItem('q-data');
  const main = document.querySelector('span.loader');
  getData(search)
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
};

export { handleClickBtn };
