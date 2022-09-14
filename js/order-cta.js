const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkButton, orderCtaBuyButton] = orderCta.children
// 아래 두줄과 위 한줄 코드는 같은 코드이다. DOM 을 이용한 요소 조작법
// const orderCtaBuyButton = orderCta.children[0]
// const orderCtaBookmarkButton = orderCta.children[1]

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}

orderCtaBuyButton.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}

orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  // 1. 버튼 is-active 클래스를 추가
  // 2. icon 클래스 변경 => ic-bookmark-filled
  // 3. 카운트 숫자 값을 변경
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replaceAll(',', ''))

  let newCount = count
  // is-active ??? classList
  if (this.classList.contains('is-active')) {
    // NOTE : 활성화가 된 상태이니 => 비활성화 (ic-bookmark)
    icon.classList.add('ic-bookmark')
    icon.classList.remove('ic-bookmark-filled')
    newCount = newCount - 1
  } else {
    // NOTE : 비활성화가 된 상태이니 => 활성화 (ic-bookmark-filled)
    icon.classList.add('ic-bookmark-filled')
    icon.classList.remove('ic-bookmark')
    newCount = newCount + 1
  }
  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}

orderCtaBookmarkButton.addEventListener('click', toggleOrderCtaBookmark)
