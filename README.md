## Installation

```bash
  yarn install
  yarn dev
```
---

## 주요 기술 스택 및 선택 이유

|        기술        | 이유                                                                                                                                           |
| :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|      React      | 컴포넌트 기반 접근 방식을 통해 재사용할 수 있는 UI 요소를 구축할 수 있으며, 가상 DOM을 사용하여 효율적인 렌더링을 지원합니다. 이를 통해 웹 애플리케이션의 복잡성을 관리하고, 유지 보수를 용이하게 할 수 있기 때문에 선택하였습니다.|
|  NEXT.JS  | NEXT.JS는 리액트 기반의 프레임워크로, 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 라우팅 등의 기능을 통해 더 좋은 성능으로 개발할 수 있으며, 프로젝트를 확장하거나 유지 보수하기 쉽게 만들어 주기 때문에 선택했습니다. | 
|  TypeScript  | 개발자가 의도한 변수나 함수 등의 목적을 더욱 명확하게 전달 가능하고 전달된 정보를 기반으로 코드 자동완성이나 잘못된 변수/함수 사용에 대한 에러 알림 같은 피드백을 받을 수 있게 되므로 순수 자바스크립트에 비해 생상성 향상할 수 있기 때문에 선택하였습니다. | 
|  GraphQL  | GraphQL은 클라이언트가 원하는 응답 값을 받을 수 있기 때문에 이로 인해 네트워크 트래픽과 데이터 전송량을 최적화할 수 있어 효율성을 높일 수 있기 때문에 선택했습니다.  | 
|  Dompurify  | React-Quill 이용 시 XSS 공격을 방지하고 사용자의 안전성을 확보할 수 있기 때문에 선택했습니다. | 

---

## What I Learned
* 어떻게 하면 서버에 데이터 낭비를 줄일 수 있을까 고민을 하며 방법을 찾아 스스로 문제를 해결해 나가는 경험을 할 수 있었습니다.
* 다양한 API를 호출하고 응답을 처리하여 서버와의 통신에 대한 이해도를 높일 수 있었습니다.

---

## Development Detail
1. **FileReader를 사용하여 이미지의 데이터 낭비를 최소화**
코스 게시물을 작성 시 이미지를 서버에 올려두고 게시물 작성을 취소하면 서버의 데이터 낭비뿐만 아니라 과부하가 걸리게 됨으로 서버 부담을 최소화하기 위해 FileReader를 사용하여 **미리 보기 용으로 임시 주소를 만들어 최종 게시물 작성 시** 서버에 이미지 업로드하도록 개발하였습니다.

![FileReader](https://github.com/DumakIt/TradeCycle/assets/112146844/67bb0519-554d-4ac4-bb1d-70a03ee6836e)

2. **XSS 공격 대비를 위한 dompurify를 이용**
react-quill 이용시 XSS공격을 대비해 Dompurify를 이용하였습니다.

![dompurify](https://github.com/DumakIt/TradeCycle/assets/112146844/7407231f-2d78-4b72-9fea-455760e45ba2)

---

## 주요기능


|        페이지        | 영상                                                                                                                                           |
| :-------------------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------- |
|       물품 (등록/조회/수정/삭제)      | ![상품등록1 (2)](https://github.com/DumakIt/TradeCycle/assets/112146844/b16948a2-761b-4f23-a6e7-e00fad5d57cb)                                    |
|      댓글 (등록/조회/수정/삭제)      | ![댓글](https://github.com/DumakIt/TradeCycle/assets/112146844/f2d83937-f705-412b-b054-f33fed428423)                                       | 
|      포인트 충전      | ![충전](https://github.com/DumakIt/TradeCycle/assets/112146844/31338c7e-a95e-4dc7-8223-1105afa299a1)                                      |
|      물품 구매      | ![구매](https://github.com/DumakIt/TradeCycle/assets/112146844/531c6ead-4884-4880-abcd-2c7da96be30e)                                   | 
|   회원가입, 로그인, 로그아웃   | ![로그인](https://github.com/DumakIt/TradeCycle/assets/112146844/8a28d3ea-a1e1-4a4f-9971-4c5a9018ed09)                                       |
