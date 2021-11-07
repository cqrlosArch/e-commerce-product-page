export default function cart() {
  const userAmount = document.getElementById('user-amount');
  const cart = document.getElementById('cart');
  const iconCart = document.getElementById('icon-cart');
  const cartInfo = document.getElementById('cart-info');

  iconCart.addEventListener('click', function (e) {
    if (e.target === iconCart) {
      cart.classList.toggle('cart--open');
    }
    cartInfo.innerHTML = '';
    if (userAmount.dataset.amount > 0) {
      createCartInfo(cartInfo, userAmount.dataset.amount, userAmount, cart);
    } else {
      cartInfo.innerHTML = `<p>Your cart is empty.</p>`;
    }
  });
}

function createCartInfo(container, amount, userAmount, cart) {
  container.innerHTML = `
           <div class="cart__container">
             <img src="./images/image-product-1-thumbnail.jpg" alt="image 1" class="cart__img">
             <div class="cart__wallet">
               <h2 class="cart__product">Automn Limited Edition...</h2>
               <p class="cart__price">$125.00 x ${amount} <span>$${(
    125 * amount
  ).toFixed(2)}</span></p>
             </div>
             <button  class="cart__delete" aria-label="delete"><img id="delete" src="./images/icon-delete.svg" alt="delete"></button>
           </div>
           <div class="cart__checkout">
             <button id="checkout" >Checkout</button>
           </div>
  	    `;

  document.getElementById('delete').addEventListener('click', (e) => {
    if (e.target.id === 'delete') {
      userAmount.dataset.amount = 0;
      userAmount.classList.remove('user__amount--active');
      cart.classList.remove('cart--open');
    }
  });
}
