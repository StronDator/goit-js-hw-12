import { createMessage } from './js/notifications';
import { downloadImages } from './js/download';

const formEl = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');
const mainLoadEl = document.querySelector('.main-load');
const moreLoadEl = document.querySelector('.more-load');

mainLoadEl.style.display = 'none';
moreLoadEl.style.display = 'none';
loadMoreBtn.style.display = 'none';

let searchKey;

const hideElement = element => {
  if (element) {
    element.style.display = 'none';
  }
};

const showElement = element => {
  if (element) {
    element.style.display = 'block';
  }
};

const handleFormSubmit = async event => {
  event.preventDefault();

  searchKey = formEl.elements.search.value.trim();
  if (!searchKey) {
    createMessage('Search must be filled!');
    return;
  }

  formEl.reset();
  hideElement(mainLoadEl);
  hideElement(moreLoadEl);

  try {
    await downloadImages(searchKey);
    showElement(loadMoreBtn);
  } catch (error) {
    console.error('Error downloading images:', error);
  }
};

const handleLoadMoreClick = async () => {
  hideElement(mainLoadEl);
  showElement(moreLoadEl);

  try {
    await downloadImages(searchKey, true);
  } catch (error) {
    console.error('Error loading more images:', error);
  } finally {
    hideElement(moreLoadEl);
  }
};

formEl.addEventListener('submit', handleFormSubmit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);
