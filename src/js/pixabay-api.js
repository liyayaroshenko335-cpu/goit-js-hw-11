//import axios from 'axios';

//const API_KEY = '55626104-ba3f0d0514f6dfab3319c84ea';
//const BASE_URL = 'https://pixabay.com';

//export async function getImagesByQuery(query) {
//const params = {
//key: API_KEY,
//q: query,
//image_type: 'photo',
//orientation: 'horizontal',
//safesearch: true,
//};

// Використовуємо await, щоб отримати результат запиту
//const response = await axios.get(BASE_URL, { params });

// Повертаємо саме об'єкт з даними (hits, total і т.д.)
//eturn response.data;
//}

import axios from 'axios';

export async function getImagesByQuery(query) {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '55626104-ba3f0d0514f6dfab3319c84ea',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response.data;
}
