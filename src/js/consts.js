export const API_KEY = '49335646-80c9a1e6c5c5033cc7f2a4c93',
  baseUrl = 'https://pixabay.com/api/',
  pagination = { page: 1, per_page: 15 },
  eventDomType = {
    search: 'submit',
    loadMore: 'button',
  },
  refs = {
    container: document.querySelector('section.container'),
    loader: document.querySelector('div.loader'),
    gallery: document.querySelector('ul.gallery'),
    loadMoreBtn: document.querySelector('.load-more-btn'),
  };
