import './scss/style.scss';
import { headerFixer } from './modules/headerFixer';
import { choise } from './modules/choice';
import { initCart } from './modules/cart';
import { renderProducts } from './modules/renderProducts';
// import { productStore } from './modules/Store';
// import { fetchProducts } from './modules/API';
import { initCoiceType } from './modules/choiceType';
import { filterProducts } from './modules/filterProducts';
import { searchProducts } from './modules/searchProducts';



const init = () => {
  headerFixer();
  choise();
  initCoiceType();
  initCart();
  // fetchProducts({ type: 'bouquets' });
  renderProducts();
  filterProducts();
  searchProducts();
};


document.addEventListener('DOMContentLoaded', init);

