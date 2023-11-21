import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryWharehouse = document.querySelector('.gallery');
// const itemsMarkup = createGalleryItemsMarkup(galleryItems);
// galleryWharehouse.insertAdjacentHTML('beforeend', itemsMarkup);
// galleryWharehouse.addEventListener('click', onImgClick);

// function createGalleryItemsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `<li class="gallery__item">
//   <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </li>`;
//     })
//     .join('');
// }
// function onImgClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== "IMG") return;
  
// }
const instance = basicLightbox.create(
  `
<img width="800" height="600">`,
  {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  }
);

function onImgClick(e) {
  e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
  if (e.code !== 'Escape') return;
  instance.close();
}


console.log(galleryItems);


