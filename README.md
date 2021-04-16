# 1. 프로젝트 이름, 미리보기 페이지 및 설명
- <https://wijihye.github.io/softy-pinko/>
- Softy Pinko.
- 21.03 ~ 21.04
- Google에서 무료 Responsive web 시안을 받아와 작업함.
- HTML, CSS, JS 모두 처음부터 끝까지 수작업!
- HTML 및 CSS, 간단한 JS 작성 능력을 길러볼까 해서 시작하게 됨.
- 최대한 간결하게 작성하도록 노력했다.
# 2. 사용한 언어 및 기술
- HTML (HTML5)
- CSS (CSS3)
- JavaScript (ES6) 
    ```
     IntersectionObserver: 기존 동적 로딩 방식의 문제점을 개선하기 위하여
    크롬51/엣지15/파이어폭스55 버전부터 지원하기 시작하는 API.
    
     사용이유: 일반적인 height를 이용하는 방법 외에 알게 된 방법 실습 위해.
     
     animate(keyframes, option), 이유: 각 element의 동적 효과를 주기 위해.
    ```
# 3. 예시 이미지
- ### Home 이미지
  ![home](https://user-images.githubusercontent.com/58647487/115040362-520deb80-9f0c-11eb-8114-8daa929a51f0.png)

- ### Responsive 예시 - testimonal section

  #### 1200px ~
  ![responsive1](https://user-images.githubusercontent.com/58647487/115040801-c5176200-9f0c-11eb-9490-297bc85dd608.png)

  #### 992 px ~
  ![responsive2](https://user-images.githubusercontent.com/58647487/115040870-d95b5f00-9f0c-11eb-87b3-92879214543c.png)

  #### 768px ~
  ![responsive3](https://user-images.githubusercontent.com/58647487/115040924-eaa46b80-9f0c-11eb-9f05-73a7b55a0659.png)

  #### 500 px ~
  ![responsive4](https://user-images.githubusercontent.com/58647487/115041111-1fb0be00-9f0d-11eb-91ce-80d5505782bb.png)
# 4. 알게된 점 및 노력한 점
- CSS에서 wrap 시 왼쪽으로 우선 정렬되어 wrap 되도록 하기 위해서는 flex-basis이해가 필요했다.
- JS에서 IntersectionObserver를 이용할 때 스크롤 방향에 따라 navbar의 menu들이 활성화 되도록 인덱싱 하는 방법을 복습햇다.
- 반복하는 과정은 최대한 함수로 작성하여 줄일 수 있도록 노력하였으나 좀 더 줄일 수 있을 것 같다.. ㅜㅜ
- 모든 commit이 끝나고 좀 더 가독성 좋은 코드를 만들기 위해서는 Early exit 방식을 이용하면 된다는 것을 알았음. -> 다음 프로젝트에서!
- Responsive web을 만들어 보기 위하여 500px, 768px, 992px, 1200px을 @media screen and (min-width: ~ 를 사용하였다.
  다음에는 **max-width** 를 사용해서 해보는 걸로.. min-width는 작은 픽셀(500px)이 우선 적용되므로 다른 픽셀 범위에서는 각각 작성해주어야 했음.
