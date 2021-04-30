# Vue-sample-pjt

### 장바구니 시스템

> Vue.js를 활용한 샘플 프로젝트



#### 사용기술

- Vue.js (vue-cli)
- 상태관리) vuex
- router



#### 주요기능

- router (MainPage / CartPage)

- MainPage
  - 상품목록 정렬/필터
    - 인기순 (score 내림차순)
    - 낮은가격순
    - 높은가격순
    - 쿠폰 적용 가능만 보기
  - 장바구니 담기/빼기
    - 장바구니에 담겨있으면 '빼기' 버튼 노출
    - 장바구니에 없으면 '담기' 버튼 노출
- CartPage
  - 전체선택 및 선택삭제
  - 쿠폰 적용 및 계산
    - 10% 할인 쿠폰
    - 10000원 할인 쿠폰
- 장바구니 기억하기
  - localStorage에 item 저장



#### 프로젝트 구조

- `App.vue` 최상단 컴포넌트
- `router/`
  - `index.js` - 경로 지정
- `views/` - router에 매핑되는 컴포넌트를 모아두는 폴더
  - `MainPage.vue`
  - `CartPage.vue`
- `components/`  - 각 페이지별 내부에 존재하는 컴포넌트들 (자식들)
  - `ProductList.vue`
    - `ProductBox.vue`
  - `CartContainer.vue`
    - `CartHeader.vue`
    - `CartItem.vue`
    - `CheckOut.vue`
- `store/`
  - `index.js` - 전역 데이터 관리
- `data` - 데이터 저장



#### Issues / 어려웠던 점

- core-js와 babel 버전이 달라 npm server가 작동하지 않음.

  => node_modules를 삭제하고, core-js 재설치(`npm install core-js`)

- 전체체크 구현

  - checkedAll (boolean)을 store에서 관리
  - watch를 사용해 하위 아이템 체크박스도 변경

- 체크리스트

  - 페이지 이동/새로고침 시 체크리스트에 아이템이 계속 담김

    => destroyed될 때, 체크리스트 비우는 mutation commit

- 전체체크 자동해제

  - 하위 아이템 체크 해제 시, 전체체크 자동으로 해제하기

    => 구조를 바꾸거나 / onchange 대신 click event를 써야할 것 같다..



#### 실행화면
- MainPage

![장바구니main](/uploads/6d6bd17f57321737b6a48b76209272ba/장바구니main.PNG)

- CartPage

![장바구니cart](/uploads/787336432aeed3b3684195b6b0e01a23/장바구니cart.PNG)

