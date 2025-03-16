import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const Err = (typeError, emessage = 'empty message') => {
  if (typeError === 'error') {
    iziToast.error({
      message: emessage,
      position: 'topRight',
      timeout: 5000,
    });
  } else if (typeError === 'success') {
  }
};

export { Err };
