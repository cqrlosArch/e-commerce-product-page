export default function toggleMenu() {
  const toggle = document.getElementById('toggle');
  const toggleImg = document.getElementById('toggle-img');
  const lightbox = document.getElementById('lightbox');
  const navbarMenu = document.getElementById('navbar-menu');

  toggle.addEventListener('click', (e) => {
 
    if (e.target.classList.contains('toggle__img')) {
      lightbox.classList.toggle('lightbox--active');
      navbarMenu.classList.toggle('navbar__menu--open');
      document.body.classList.toggle('no-scroll');
    }
    if (navbarMenu.classList.contains('navbar__menu--open')) {
      toggleImg.src = './images/icon-close.svg';
      toggleImg.alt = 'icon close';
    } else {
      toggleImg.src = './images/icon-menu.svg';
      toggleImg.alt = 'icon menu';
    }
  });
}
