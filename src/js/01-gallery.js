// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const listGallery = document.querySelector('.gallery');
const listItemsGallery = createListItemsGallery(galleryItems);
listGallery.innerHTML = listItemsGallery;

function createListItemsGallery(items) {
    return items.map(item =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
}

    let gallery = new SimpleLightbox('.gallery a', { captionsData: 'alt' });
    gallery.on('show.simplelightbox', function () {
	    document.addEventListener("keydown", onEscapeButton);
    });
    gallery.on('close.simplelightbox', function () {
	    document.removeEventListener("keydown", onEscapeButton);
    });    
      
      function onEscapeButton(evt) {
        if (evt.key === "Escape") {
          instance.close();
          
    }
  }
        



