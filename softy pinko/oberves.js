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
            transform: 'translateX(-150px)',
          },
          {
            // to
            opacity: 1,
            transform: 'translateX(0px)',
          },
        ],
        {
          // option
          duration: 500,
          ease: 'ease-out',
        }
      );
      entry.target.style.opacity = 1;
      // 강제로 target의 opacity를 1로 만들어 사라지지 않게 함.
      observer.unobserve(entry.target);
      // target observe 정지
    }
  });
}

function countNum(entries, observer) {
  // 숫자 count되는 것 구현.
  // setInterval을 통해 하나씩 올라가는 것 처럼 보이게 함.
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const boundery = parseInt(entry.target.innerText);
      // 각 target의 innerText만큼의 범위를 준다
      let setIntervalId_count = setInterval(count, 15);
      // 0.15초 간격으로 count 함수 실행시키기
      let cnt = 0;
      // innerText를 바꿔 줄 변수

      function count() {
        // setInterval용 임시 변수
        cnt++;
        if (cnt > boundery) {
          // cnt 변수가 만약 boundery를 벗어나면
          clearInterval(setIntervalId_count);
          // setInterval 중지
        } else {
          // 아직 cnt변수가 boundery 전이라면
          entry.target.innerText = cnt;
          // innerText를 하나씩 변경
        }
      }
      observer.unobserve(entry.target);
      // target observe 정지
    }
  });
}

const options = {
  root: null,
  threshold: 0.7,
};

const aboutObserver = new IntersectionObserver(aboutImg, options);
const countObserver = new IntersectionObserver(countNum, options);
// IntersectionObserver 할당

document.querySelectorAll('.about img').forEach((element) => {
  aboutObserver.observe(element);
});
// about img observe

document.querySelectorAll('.count .font-weight-heavy').forEach((element) => {
  countObserver.observe(element);
});
// count observe
