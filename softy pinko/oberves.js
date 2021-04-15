'use strict';

function aboutImg(entries, observer) {
  // about section의 img가 오른쪽->왼쪽 animation하게하기
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          {
            // from
            opacity: 0,
            transform: 'translateX(-50px)',
          },
          {
            // to
            opacity: 1,
            transform: 'translateX(0px)',
          },
        ],
        {
          // option
          duration: 1000,
          easing: 'ease-out',
        }
      );
      entry.target.style.opacity = 1;
      // 강제로 target의 opacity를 1로 만들어 사라지지 않게 함.
      observer.unobserve(entry.target);
      // target observe 정지
    }
  });
}

function pricingTables(entries, observer) {
  function pricingTableAnimate(idx, dur) {
    entries[idx].target.animate(
      [
        {
          opacity: 0,
          transform: 'translateY(100px)',
        },
        {
          opacity: 1,
          transform: 'translateY(0px)',
        },
      ],
      {
        duration: dur,
        easing: 'ease-out',
      }
    );
  }

  if (entries[0].isIntersecting) {
    pricingTableAnimate(0, 600);
    observer.unobserve(entries[0].target);
  }
  if (entries[1].isIntersecting) {
    pricingTableAnimate(1, 1100);
    observer.unobserve(entries[1].target);
  }
  if (entries[2].isIntersecting) {
    pricingTableAnimate(2, 1600);
    observer.unobserve(entries[2].target);
  }
}

function countNum(entries, observer) {
  // 숫자 count되는 것 구현.
  // setInterval을 통해 하나씩 올라가는 것 처럼 보이게 함.

  function count(boundery, entry, cnt, timeId) {
    // setInterval용 임시 변수
    if (cnt > boundery) {
      // cnt 변수가 만약 boundery를 벗어나면
      clearInterval(timeId);
      // setInterval 중지
    } else {
      // 아직 cnt변수가 boundery 전이라면
      entry.target.innerText = cnt;
      // innerText를 하나씩 변경
    }
  }

  if (entries[0].isIntersecting) {
    let cntZero = 0;
    // innerText를 바꿔 줄 변수
    const bounderyZero = parseInt(entries[0].target.innerText);
    // 각 target의 innerText만큼의 범위를 준다
    let timeIdZero = setInterval(() => {
      count(bounderyZero, entries[0], cntZero, timeIdZero);
      cntZero++;
    }, 15);
    // 0.15초 간격으로 count 함수 실행시키기
    observer.unobserve(entries[0].target);
  }
  if (entries[1].isIntersecting) {
    let cntFirst = 0;
    const bounderyFirst = parseInt(entries[1].target.innerText);
    let timeIdFirst = setInterval(() => {
      count(bounderyFirst, entries[1], cntFirst, timeIdFirst);
      cntFirst++;
    }, 30);
    observer.unobserve(entries[1].target);
  }
  if (entries[2].isIntersecting) {
    let cntSecond = 0;
    const bounderySecond = parseInt(entries[2].target.innerText);
    let timeIdSecond = setInterval(() => {
      count(bounderySecond, entries[2], cntSecond, timeIdSecond);
      cntSecond++;
    }, 100);
    observer.unobserve(entries[2].target);
  }
  if (entries[3].isIntersecting) {
    let cntThird = 0;
    const bounderyThird = parseInt(entries[3].target.innerText);
    let timeIdThird = setInterval(() => {
      count(bounderyThird, entries[3], cntThird, timeIdThird);
      cntThird++;
    }, 65);
    observer.unobserve(entries[3].target);
  }
  // 모든 entry의 target observe 정지
}

const options = {
  root: null,
  threshold: 0.7,
};

const aboutObserver = new IntersectionObserver(aboutImg, options);
const pricingObserver = new IntersectionObserver(pricingTables, options);
const countObserver = new IntersectionObserver(countNum, options);
// IntersectionObserver 할당

document.querySelectorAll('.about img').forEach((element) => {
  aboutObserver.observe(element);
});
// about img observe

document.querySelectorAll('.pricing-table').forEach((element) => {
  pricingObserver.observe(element);
});
// pricing table observe

document.querySelectorAll('.count .font-weight-heavy').forEach((element) => {
  countObserver.observe(element);
});
// count observe
