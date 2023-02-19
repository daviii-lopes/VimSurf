let config = {
  scrollSize : 500,
}

let keys = {
  h() {
	window.scrollBy(config.scrollSize, 0)
  },
  j() {
	window.scrollBy(0, config.scrollSize)
  },
  k() {
	window.scrollBy(0, -config.scrollSize)
  },
  l() {
	window.scrollBy(-config.scrollSize, 0)
  },
  g() {
	window.scrollTo(0, 0)
  },
  G() {
	window.scrollTo(0, document.documentElement.scrollHeight)
  },
  f() {
	let link = document.querySelectorAll('a')
	let letter = "oi"
	for (let i = 0; i < link; i++) {
	  link[i].after(letter)//`<div class="tooltip">${letter}</div>`)
	}
  }
}

document.addEventListener('keydown', (e) => {
  keys[e.key]()
  console.log(e)
  if (e.shiftKey && e.key == "g") {
	keys["G"]()
  }
})
