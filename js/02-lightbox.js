import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryWharehouse = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryWharehouse.insertAdjacentHTML('beforeend', itemsMarkup);

// // rendered items
function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
     return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
     />
  </a>
 </li>`
   }).join('');
}
 

console.log(galleryItems);
