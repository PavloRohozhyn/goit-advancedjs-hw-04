import { showLoader, showLoadMoreBtn } from './js/render-functions';
import { refs, eventDomType } from './js/consts';
import { handleClickBtn } from './js/handler.button';
import { handleSubmitBtn } from './js/handler.submit';

showLoader(false); // remove loader
showLoadMoreBtn(false); // remove load more btn

// Listeners
refs.container.addEventListener('click', event => {
  if (event.target.type === eventDomType.search) {
    handleSubmitBtn(event);
  } else if (event.target.type === eventDomType.loadMore) {
    handleClickBtn(event);
  } else {
  }
});
