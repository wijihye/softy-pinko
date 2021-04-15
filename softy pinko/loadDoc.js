'use strict';

// setTimeout은 특정 시간 후 1번만 실행
// VS setInterval은 특정 시간 마다 반복(여러 번)

const loader = document.querySelector('.loader');
const homeContents = document.querySelectorAll('.home__description__content');

let timeId = null;

window.addEventListener('load', () => {
  // window가 load되면 발생하는 이벤트
  loader.animate([{ opacity: 1 }, { opacity: 0 }], {
    duration: 1000,
    easing: 'ease-out',
  });
  // loader element에 aminate 효과를 줌
  // : 1초동안 지속되면서 ease-out의 모양으로 fade-out시킴

  setTimeout(() => {
    loader.style.visibility = 'hidden';

    function homeContentAnimate(idx, dur) {
      homeContents[idx].animate(
        [
          {
            opacity: 0,
            transform: 'translateY(70px)',
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

    homeContentAnimate(0, 500);
    homeContentAnimate(1, 800);
    homeContentAnimate(2, 1100);
  }, 990);
  // 1초 후에(animate)가 모두 끝난 후에 visibility를
  // hidden으로 변경 -> 한 번만 실행하고 없애기 위함.
  // 그리고 homeContents에 개별 animate를 줌.
  // (어떻게 하나로 줄이지) -> 함수 선언해서 줄였다.
});
