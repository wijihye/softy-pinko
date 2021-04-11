'use strict';

const navbar = document.querySelector('#navbar');
const navbarBtn = document.querySelector('#menuicon');
const navbarContents = document.querySelector('.nav__content');

function showMenuDrop(event) {
  navbarBtn.classList.toggle('clicked');
  navbarContents.classList.toggle('clicked');
  // clicked class toggle
  if (
    navbarBtn.classList.contains('clicked') &&
    navbarContents.classList.contains('clicked')
  ) {
    // 두 개의 elements의 class에 clicked가 존재하면
    navbarContents.style.display = 'block';
    // <ul> display: block;
    navbar.style.paddingBottom = '0';
    navbar.style.height = '';
    // 해당 style 제거
  } else {
    // clicked class가 없어지면
    navbarContents.style.display = 'none';
    // <ul> display: none;
    navbar.style.paddingBottom = '25px';
    navbar.style.height = '30px';
    // navbar에 style 지정
  }
}

function checkNavBtn() {
  navbarBtn.classList.remove('clicked');
  navbarContents.classList.remove('clicked');
  // clicked class 제거
  navbar.style.paddingBottom = '25px';
  // navbar style 수정
  navbarContents.style.display = 'none';
  // navbarContents를 none으로 설정했으나
  // css에서 해당 범위 미디어쿼리에서
  // display:flex !important;를 해 놓아서
  // 항상 표시됨.
}

navbarBtn.addEventListener('click', showMenuDrop);

window.addEventListener('resize', () => {
  navbarBtn.checked = false;
  // checkbox 상태 항상 false
  if (document.documentElement.clientWidth >= 992) {
    // 992px 위로 창 size가 변경되었을 때
    checkNavBtn();
  }
});
