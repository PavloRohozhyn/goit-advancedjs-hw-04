import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const conf = {
  position: 'topRight',
  timeout: 3000,
};

const Err = (typeError, emessage = 'empty message') => {
  if (typeError === 'error') {
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
