import galleryItems from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('.js-gallery'),
};

const galleryMarkup = galleryItems.map(object => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.setAttribute('href', object.original);
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.setAttribute('src', object.preview);
  image.setAttribute('data-source', object.original);
  image.setAttribute('alt', object.description);
  link.appendChild(image);
  item.appendChild(link);
  return item;
});

refs.galleryList.append(...galleryMarkup);
console.log(galleryMarkup);

// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
let urlValue;

refs.galleryList.addEventListener('click', event => {
  event.preventDefault();
  if (event.currentTarget !== event.target) {
      urlValue = event.target.dataset.source;
  }
});


// Открытие модального окна по клику на элементе галереи.

// Подмена значения атрибута src элемента img.lightbox__image.

// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального окна,
// пока грузится изображение, мы не видели предыдущее.

// Ссылка на оригинальное изображение должна храниться в data-атрибуте source на элементе img,
// и указываться в href ссылки(это необходимо для доступности).

// Закрытие модального окна по клику на div.lightbox__overlay
// Закрытие модального окна по нажатию клавиши ESC
// Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо"

// Task ------------------------------------------------------------------------

// Создание и рендер разметки по массиву данных и предоставленному шаблону.
/*
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li>;
*/