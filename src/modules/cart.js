import { cartStore } from './Store';
import { renderCart } from './renderCart';

const headerCartButton = document.querySelector('.header__cart-btn');
const cartClose = document.querySelector('.cart__close');
const cart = document.querySelector('.cart');
const cartPriceTotal = document.querySelector('.cart__footer-price--total');

const toggleCart = () => {
  cart.classList.toggle('cart--open');

  if (cart.classList.contains('cart--open') && window.innerWidth > 1360) {
    cart.scrollIntoView({ behavior: 'smooth' });
  }
};

export const initCart = async () => {
  await cartStore.init();

  headerCartButton.textContent = cartStore.getCart().length;
  renderCart();

  cartStore.subscribe(() => {
    const cart =cartStore.getCart();
    headerCartButton.textContent = cart.length;

    const totalPriceValue = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    );
    cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;

  });

  headerCartButton.addEventListener('click', toggleCart);
  
  cartClose.addEventListener('click', () => {
    cart.classList.remove('cart--open');
  });
};
