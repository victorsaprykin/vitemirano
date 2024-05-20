import { productStore } from './Store';
import { ListType } from './ListType';

export const initCoiceType = () => {
  const typeChoice = document.querySelector('.filter__choice--type');
  const choiceBox = document.querySelector('.filter__choice-box--type');

  const updateTypeChoiceVisibility = () => {
    const categories = productStore.getCategories();

    if (categories.size) {
      typeChoice.style.display = '';
      choiceBox.textContent = '';
      const listType = ListType([...categories]);
      choiceBox.append(listType);
    } else {
      typeChoice.style.display = 'none';
    }
  };
  productStore.subscribe(updateTypeChoiceVisibility);

  updateTypeChoiceVisibility();
};
