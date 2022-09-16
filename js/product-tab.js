const productTap = document.querySelector('.product-tab')
const productTabButtonList = productTap.querySelectorAll('button')

let currentActiveTab = productTap.querySelector('.is-active')

function toggleActiveTab() {
  // 1. is-active
  const tabItem = this.parentNode

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}

productTabButtonList.forEach((button) => {
  button.addEventListener('click', toggleActiveTab)
})
