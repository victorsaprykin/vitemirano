import { API_URL } from './API';
import { cartStore } from './Store';

export const ProductCard = (product) => (
  <li class='goods__item'>
    <article class='goods__card card'>
      <img
        src={`${API_URL}${product.photoUrl}`}
        alt={product.name}
        class='card__img'
      />

      <div class='card__content'>
        <h3 class='card__title'>{product.name}</h3>

        <div class='card__footer'>
          <p class='card__date'>сегодня&nbsp;в&nbsp;14:00</p>

          <button
            class='card__btn'
            onMouseEnter={(e) => {
              e.target.textContent = 'В корзину';
            }}
            onMouseLeave={(e) => {
              e.target.innerHTML = `${product.price}&nbsp;₽`;
            }}
            onClick={() => {
              cartStore.addProductCart(product.id);
            }}>
            {product.price}&nbsp;₽
          </button>
        </div>
      </div>
    </article>
  </li>
);
