import { debounce } from './debounce';

  const adjustElementPosition = (el, count = 0) => {
    const rect = el.getBoundingClientRect();
    const viewportWidth = window.innerWidth;

    if (rect.left < 0) {
      el.style.left = '0';
      el.style.right = 'auto';
      el.style.transform = 'translateX(0)';
    } else if (rect.right > viewportWidth) {
      el.style.left = 'auto';
      el.style.right = '0';
      el.style.transform = 'translateX(0)';
    } else {
      el.style.left = '50%';
      el.style.right = 'auto';
      el.style.transform = 'translateX(-50%)';
    }

    const postRect = el.getBoundingClientRect();
    
    if ((postRect.left < 0 || postRect.right > viewportWidth) && count < 3) {
      count++;
      adjustElementPosition(el, count);
    }
  };

export const choise = () => {
  const choices = document.querySelectorAll('.choice');

  choices.forEach((choice) => {
    const btn = choice.querySelector('.choice__btn');
    const box = choice.querySelector('.choice__box');

    btn.addEventListener('click', () => {
      box.classList.toggle('choice__box--open');
      btn.classList.toggle('choice__btn--down');

      choices.forEach((otherChoice) => {
        if (otherChoice !== choice) {
          otherChoice
            .querySelector('.choice__box')
            .classList.remove('choice__box--open');
        }
      });

      adjustElementPosition(box);
    });

    window.addEventListener(
      'resize',
      debounce(() => {
        adjustElementPosition(box);
      })
    );
    document.addEventListener('click', ({ target }) => {
      let clickInside = target.closest('.choice');

      if (!clickInside) {
        choices.forEach((choice) => {
          choice
            .querySelector('.choice__box')
            .classList.remove('choice__box--open');
        });
      }
    });
  });
};
