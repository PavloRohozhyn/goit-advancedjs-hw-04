import { API_KEY, baseUrl } from './consts';
import axios from 'axios';

const getData = search => {
  search = search ? search : '';
  const opt = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };
  return axios.get(baseUrl + '?' + new URLSearchParams(opt));
};

export default getData;
