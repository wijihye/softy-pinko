'use strict';

const navbar = document.querySelector('#navbar');
const navbarBtn = document.querySelector('#menuicon');
const navbarContents = document.querySelector('.nav__content');

function checkMenuicon(event) {
  navbarBtn.classList.toggle('clicked');
  navbarContents.classList.toggle('clicked');

  if (
    navbarBtn.classList.contains('clicked') &&
    navbarContents.classList.contains('clicked')
  ) {
    navbarContents.style.display = 'block';
    navbar.style.paddingBottom = '0';
    navbar.style.height = '';
  } else {
    navbarContents.style.display = 'none';
    navbar.style.paddingBottom = '25px';
    navbar.style.height = '30px';
  }
}

navbarBtn.addEventListener('click', checkMenuicon);

window.addEventListener('resize', () => {
  // 992px 위로 창 size가 변경되었을 때
  // clicked class 제거
  if (document.documentElement.clientWidth >= 992) {
    navbarBtn.classList.remove('clicked');
    navbarContents.classList.remove('clicked');
  }
});
