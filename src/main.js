import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import getData from './js/pixabay-api';
import { render, showLoader } from './js/render-functions';

// remove loader
showLoader(false);

document.querySelector('.form').addEventListener('submit', event => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  if (!formProps.search) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 5000,
    });
    throw new Error();
  } else {
    showLoader(true);
  }

  document.querySelector('ul.gallery').innerHTML = ''; // clear content
  const main = document.querySelector('span.loader');
  getData(formProps.search)
    .then(res => {
      if (res.status != 200) {
        throw new Error('Server response fail');
      }
      main.innerHtml = render(res.data);
    })
    .catch(e => {
      iziToast.error({
        message: e.message,
        position: 'topRight',
        timeout: 5000,
      });
      showLoader(false); // remove loader
    });
});
