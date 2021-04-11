'use strict';

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.animate([{ opacity: '1' }, { opacity: '0' }], {
    duration: 1000,
    easing: 'ease-out',
  });

  setInterval(() => {
    loader.style.visibility = 'hidden';
  }, 1000);
});
