import { API_KEY, baseUrl, pagination } from './consts';
import axios from 'axios';

const getData = async search => {
  search = search ? search : '';
  const opt = {
    key: API_KEY,
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: pagination.page,
    per_page: pagination.per_page,
  };
  return await axios.get(baseUrl + '?' + new URLSearchParams(opt));
};

export default getData;
