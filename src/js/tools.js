import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { showLoadMoreBtn, showLoader } from './render-functions';

const conf = {
  position: 'topRight',
  timeout: 3000,
};

const Err = (typeError, emessage = 'empty message') => {
  if (typeError === 'error') {
    showLoadMoreBtn(false);
    showLoader(false);
    iziToast.error({
      message: emessage,
      ...conf,
    });
  } else if (typeError === 'success') {
    iziToast.success({
      message: emessage,
      ...conf,
    });
  }
};

export { Err };
