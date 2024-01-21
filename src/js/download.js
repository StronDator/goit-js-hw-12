import { renderImages } from './render-html';
import { createMessage } from './notifications';
import axios from 'axios';

const searchParams = {
  key: '41460845-2ab95350f4581127087fd5faf',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

const searchBtn = document.querySelector('.search-btn');
const loadMoreBtn = document.querySelector('.load-more-btn');
const searchLoadingTextEl = document.querySelector('.main-load');
const moreLoadingTextEl = document.querySelector('.more-load');

export async function downloadImages(searchKey, isLoadMore = false) {
  try {
    updateUIBeforeRequest(isLoadMore);
    
    searchParams.q = searchKey;
    
    const images = await fetchImages();
    
    renderImages(images, isLoadMore);

    updateUIAfterRequest(isLoadMore, images.totalHits);
  } catch (error) {
    handleError(isLoadMore, error);
  }
}

function updateUIBeforeRequest(isLoadMore) {
  if (isLoadMore) {
    moreLoadingTextEl.style.display = 'block';
    loadMoreBtn.style.display = 'none';
    loadMoreBtn.blur();

    if (searchParams.page === 1) searchParams.page++;
  } else {
    searchLoadingTextEl.style.display = 'block';
    searchBtn.disabled = true;
    searchBtn.blur();

    searchParams.page = 1;
  }
}

function updateUIAfterRequest(isLoadMore, totalHits) {
  if (isLoadMore) {
    searchParams.page++;

    const elementRect = document
      .querySelector('.gallery-link')
      .getBoundingClientRect();
    window.scrollBy({
      top: elementRect.height * 2.0,
      left: 0,
      behavior: 'smooth',
    });

    if (searchParams.per_page * searchParams.page >= totalHits)
      createMessage(
        "We're sorry, but you've reached the end of search results."
      );
    else loadMoreBtn.style.display = 'flex';

    moreLoadingTextEl.style.display = 'none';
  } else {
    searchLoadingTextEl.style.display = 'none';
    searchBtn.disabled = false;
    loadMoreBtn.style.display = 'flex';
  }
}

function handleError(isLoadMore, error) {
  createMessage(error);

  if (isLoadMore) {
    loadMoreBtn.style.display = 'flex';
    moreLoadingTextEl.style.display = 'none';
  } else {
    searchLoadingTextEl.style.display = 'none';
    searchBtn.disabled = false;
    loadMoreBtn.style.display = 'flex';
  }
}

async function fetchImages() {
  const response = await axios.get('https://pixabay.com/api/', {
    params: { ...searchParams },
  });

  return response.data;
}
