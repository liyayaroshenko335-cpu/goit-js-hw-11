import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loaderElement = document.querySelector('.loader');

// Ініціалізуємо Lightbox один раз
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img => `
      <li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}" />
          <div class="info">
            <div class="info-item"><b>Likes</b><span>${img.likes}</span></div>
            <div class="info-item"><b>Views</b><span>${img.views}</span></div>
            <div class="info-item"><b>Comments</b><span>${img.comments}</span></div>
            <div class="info-item"><b>Downloads</b><span>${img.downloads}</span></div>
          </div>
        </a>
      </li>`
    )
    .join('');

  galleryContainer.innerHTML = markup;

  // Оновлюємо вміст галереї для Lightbox
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loaderElement.classList.remove('hidden');
}

export function hideLoader() {
  loaderElement.classList.add('hidden');
}
