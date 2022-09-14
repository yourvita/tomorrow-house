# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>
  <a class="gnb-icon-button" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
  </a>

  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인을 했을 경우

```html
<div class="button-group">
  <button
    class="gnb-icon-button is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="ic-bookmark"></i>
  </a>

  <a
    href="/"
    class="gnb-icon-button sm-hidden"
    aria-label="내소식 페이지로 이동"
  >
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-button" href="/" aria-label="장바구니 페이지로 이동">
    <i class="ic-cart"></i>
    <strong class="badge">15</strong>
  </a>

  <button
    class="gnb-icon-button sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="/assets/images/img-user-01.jpg" alt="user-image" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-40 btn-outlined" href="/">로그인</a>
  <a class="btn-40 btn-primary" href="/">회원가입</a>
</div>
```

- 로그인을 했을 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="/assets/images/img-user-01.jpg" alt="user-image" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```

# Review Card Variations

## 1.Review Card Header

| Avatar | Username | Rating | Timestamp | Vendor | Desc.                          |
| ------ | -------- | ------ | --------- | ------ | ------------------------------ |
| O      | 필수     | 필수   | 필수      | 필수   | 유저 프로필 이미지가 있는 경우 |
| X      | 필수     | 필수   | 필수      | 필수   | 유저 프로필이 없는 경우        |

## 2. Review Card body

| Image | Text Content | Desc.                                 |
| ----- | ------------ | ------------------------------------- |
| X     | 필수         | 유저가 리뷰 이미지를 올리지 않은 경우 |
| O     | 필수         | 유저가 리뷰 이미지를 올린 경우        |

## 3. Review Card footer

| Help Button | Helped | Desc                                |
| ----------- | ------ | ----------------------------------- |
| True        | O      | 사용자가 도움됨을 체크, 도움됨 1+   |
| False       | O      | 사용자가 도움됨을 미체크, 도움됨 1+ |
| False       | X      | 사용자가 도움됨을 미체크, 도움됨 X  |

# Inquiry Card Card

| Public | Question        | Anser  | Desc.                    | Check |
| ------ | --------------- | ------ | ------------------------ | ----- |
| x      | "비밀글입니다." | 미노출 | 문의가 비공개일 경우     |       |
| O      | 노출            | X      | 문의눈 공개, 답변 미완료 |       |
| O      | 노출            | O      | 문의는 공개, 답변 완료   |       |
