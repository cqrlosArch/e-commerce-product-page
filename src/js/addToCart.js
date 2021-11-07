export default function addToCart() {
  const addToCart = document.getElementById('add-to-cart');
  const userAmount = document.getElementById('user-amount');
  const selectAmount = document.getElementById('select-amount');

  addToCart.addEventListener('click', () => {
    userAmount.dataset.amount = selectAmount.textContent;
    if (selectAmount.textContent > 0) {
      userAmount.classList.add('user__amount--active');
    } else {
      userAmount.classList.remove('user__amount--active');
    }
  });
}

