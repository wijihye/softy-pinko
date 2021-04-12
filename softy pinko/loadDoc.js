'use strict';

// setTimeout은 특정 시간 후 1번만 실행
// VS setInterval은 특정 시간 마다 반복(여러 번)

const loader = document.querySelector('.loader');
const homeContents = document.querySelectorAll('.home__description__content');

let timeId = null;

window.addEventListener('load', () => {
  // window가 load되면 발생하는 이벤트
  loader.animate([{ opacity: '1' }, { opacity: '0' }], {
    duration: 1000,
    easing: 'ease-out',
  });
  // loader element에 aminate 효과를 줌
  // : 1초동안 지속되면서 ease-out의 모양으로 fade-out시킴

  setTimeout(() => {
    loader.style.visibility = 'hidden';
    homeContents[0].animate(
      [
        {
          opacity: 0,
          transform: 'translateX(-50px)',
        },
        {
          opacity: 1,
          transform: 'translateX(0px)',
        },
      ],
      {
        duration: 1500,
        easing: 'ease-out',
      }
    );

    homeContents[1].animate(
      [
        {
          opacity: 0,
          transform: 'translateX(-150px)',
        },
        {
          opacity: 1,
          transform: 'translateX(0px)',
        },
      ],
      {
        duration: 1500,
        easing: 'ease-out',
      }
    );

    homeContents[2].animate(
      [
        {
          opacity: 0,
          transform: 'translateX(-250px)',
        },
        {
          opacity: 1,
          transform: 'translateX(0px)',
        },
      ],
      {
        duration: 1500,
        easing: 'ease-out',
      }
    );
  }, 990);
  // 1초 후에(animate)가 모두 끝난 후에 visibility를
  // hidden으로 변경 -> 한 번만 실행하고 없애기 위함.
  // 그리고 homeContents에 개별 animate를 줌.
  // (어떻게 하나로 줄이지)
});
