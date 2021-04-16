'use strict';

const navbar = document.querySelector('#navbar');
const navbarBtn = document.querySelector('#menuicon');
const navbarContents = document.querySelector('.nav__content');

const menus = [
  '#home',
  '#about',
  '#work-process',
  '#testimonials',
  '#pricing-tables',
  '#blog-entries',
  '#contact-us',
];

const sections = menus.map((menu) => document.querySelector(menu));
const navMenus = menus.map((menu) =>
  document.querySelector(`[data-link="${menu}"]`)
);
let selectedMenu = navMenus[0];
// 지금 'selected' class가 붙어있는 nav menu
let selectedMenuIdx = 0;
// 지금 'selected' class가 붙어있는 nav menu idx

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

function observeSections(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      const idx = menus.indexOf(`#${entry.target.id}`);
      if (entry.boundingClientRect.y < 0) {
        // section이 위로 올라가서 안보이게되면
        selectedMenuIdx = idx + 1;
        // 현재 선택된 메뉴 idx = idx 1증가
      } else {
        selectedMenuIdx = idx - 1;
      }
      /* => 설명: 
        1. 안보이는 entry모두를 받아오고 그 entry들의
          id를 이용해 menus의 배열 idx를 뽑아옴.
        2. 그 다음에 else로 들어가 현재 select되어있는 idx를 계산함.
       */
    }
  });
}

function selectNavItem(selectedElement) {
  selectedMenu.classList.remove('selected');
  selectedMenu = selectedElement;
  selectedMenu.classList.add('selected');
}

window.addEventListener('wheel', (event) => {
  if (window.scrollY == 0) {
    // 스크롤이 맨 위면
    selectedMenuIdx = 0;
  } else if (
    document.body.clientHeight ==
    Math.round(window.innerHeight + window.scrollY)
  ) {
    // 스크롤이 맨 아래면
    selectedMenuIdx = menus.length - 1;
  }
  // console.log(selectedMenuIdx);
  selectNavItem(navMenus[selectedMenuIdx]);
});

const menuOptions = {
  threshold: 0.4,
  // element의 40% 정도 보이면 observing
  // 대신 60% 나가야 unobserving
};

const sectionObserver = new IntersectionObserver(observeSections, menuOptions);

sections.forEach((element) => {
  sectionObserver.observe(element);
});
// Observing sections
