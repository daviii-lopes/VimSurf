let keys = {
  h() {
	window.scrollBy(100, 0)
  },
  j() {
	window.scrollBy(0, 100)
  },
  k() {
	window.scrollBy(0, -100)
  },
  l() {
	window.scrollBy(-100, 0)
  },
  g() {
	window.scrollTo(0, 0)
  }
}

document.addEventListener('keydown', (e) => {
  keys[e.key]()
})
