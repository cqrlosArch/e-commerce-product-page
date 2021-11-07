export default function modal() {
  const galleryModal = document.getElementById('gallery-modal');
  const buttonModal = document.querySelector('.slider-modal__buttons');
  const lightbox = document.getElementById('lightbox');

  document.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('slider-main__item--active') ||
      e.target.matches('#gallery-modal__close')
    ) {
      lightbox.classList.toggle('lightbox--active');
      galleryModal.classList.toggle('gallery-modal--active');
      buttonModal.classList.toggle('slider-modal__buttons--active');
    }
  });
}
