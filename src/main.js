import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  // Отримуємо значення з поля пошуку та прибираємо зайві пробіли
  const query = event.currentTarget.elements['search-text'].value.trim();

  // 1. Перевірка на порожній рядок
  if (query === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'Please fill in the search field!',
      position: 'topRight',
    });
    return;
  }

  // 2. Підготовка до нового пошуку
  clearGallery();
  showLoader();

  // 3. Виконання запиту
  getImagesByQuery(query)
    .then(data => {
      // Перевіряємо, чи є зображення у відповіді
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      // Малюємо галерею
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      // 4. Ховаємо лоадер і очищаємо форму незалежно від результату
      hideLoader();
      form.reset();
    });
});
