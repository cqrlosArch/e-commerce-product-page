export default function slider(
  nextElement,
  prevElement,
  itemsSlider,
  classItemSlider
) {
  const next = document.getElementById(nextElement),
    prev = document.getElementById(prevElement),
    slides = document.querySelectorAll(itemsSlider);
  let i = 0;
  document.addEventListener('click', (e) => {
 
    if (e.target === prev) {
      e.preventDefault();
      slides[i].classList.remove(classItemSlider);
      i--;
      if (i < 0) {
        i = slides.length - 1;
      }
      slides[i].classList.add(classItemSlider);
    }

    if (e.target === next) {
      e.preventDefault();

      slides[i].classList.remove(classItemSlider);
      i++;
      if (i > slides.length - 1) {
        i = 0;
      }
      slides[i].classList.add(classItemSlider);
    }
  });
}
