export default function thumbnail(
  thumbnailElement,
  sliderItem,
  thumbnailImg,
  sliderItemClassActive,
  thumbnailImgClassActive
) {
  const thumbnail = document.getElementById(thumbnailElement);
  const slides = document.querySelectorAll(sliderItem);

  thumbnail.addEventListener('click', function (e) {
    if (e.target.classList.contains(thumbnailImg)) {
      slides.forEach((slide) => {
        if (e.target.getAttribute('data-img') == slide.dataset.img) {
          slide.classList.add(sliderItemClassActive);
          [...e.currentTarget.children].forEach((el) => {
            el.classList.remove(thumbnailImgClassActive);
          });
          e.target.parentNode.classList.add(thumbnailImgClassActive);
        } else {
          slide.classList.remove(sliderItemClassActive);
        }
      });
    }
  });
}
