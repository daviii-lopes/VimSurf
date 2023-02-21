let config = {
  scrollSize : 300,
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
  showButtonsAndLinks() {
	let array = []
	for (let i = 0; i < document.querySelectorAll('a').length; i++) {	
	  array.push(document.querySelectorAll('a')[i])
	}
	for (let i = 0; i < document.querySelectorAll('button').length; i++) {
	  array.push(document.querySelectorAll('button')[i])
	}
	for (let i = 0; i < array.length; i++) {
	  array[i].after(i)
	  console.log(array)
	}
	return array
  },
  commandPrompt() {
	let commands = {
	  open(url = null) {
		if (url = null) {
		  alert("Something is wrong with your link")
		} 
		else {
		  window.open("https://" + url)
		}
	  },
	  click(index = 0) {
		let array = []

		array[index].click()
	  }
	}
	let commandPrompt = window.prompt('Type something')
	let promptArray = commandPrompt.split(' ')
	commands[promptArray[0]](promptArray[1])
		
  }
}

keys.showButtonsAndLinks()
document.addEventListener('keydown', (e) => {
  if (keys[e.key]) {
	keys[e.key]()
  }
  console.log(e)
  if (e.shiftKey && e.key == "g") {
	keys["G"]()
  }
  if (e.key == ":") {
	keys.commandPrompt()
  }
})
