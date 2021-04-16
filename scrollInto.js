'use strict';

// const menus = [
//   '#home',
//   '#about',
//   '#work-process',
//   '#testimonials',
//   '#pricing-tables',
//   '#blog-entries',
//   '#contact-us',
// ];

// const sections = menus.map((menu) => {
//   return document.querySelector(menu);
// });

const navItems = document.querySelectorAll('.nav__item');

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}

function goToMenus(event) {
  const dataLink = event.target.dataset.link;
  navItems.forEach((item) => {
    item.classList.remove('selected');
  });

  if (dataLink != undefined) {
    scrollIntoView(dataLink);
    event.target.classList.add('selected');
    navbarBtn.checked = false;
    // 메뉴 아이콘 원래대로
    checkNavBtn();
  }
}

navbarContents.addEventListener('click', goToMenus);
