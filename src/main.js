import { createMessage } from './js/notifications';
import { downloadImages } from './js/download';

const formEl = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');

document.querySelector('.main-load').style.display = 'none';
document.querySelector('.more-load').style.display = 'none';
loadMoreBtn.style.display = 'none';

let searchKey;

formEl.addEventListener('submit', event => {
  event.preventDefault();

  searchKey = formEl.elements.search.value.trim();
  if (!searchKey) {
    createMessage('Search must be filled!');
    return;
  }
  formEl.reset();

  downloadImages(searchKey);
});

loadMoreBtn.addEventListener('click', () => {
  downloadImages(searchKey, true);
});