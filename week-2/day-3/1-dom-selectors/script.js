const allDOMLetters = document.querySelectorAll(".letter")
const allLettersLive = document.getElementsByClassName("letter")
const theSpecialOne = document.querySelector("td.special")
// console.log(allDOMLetters)
console.log(allLettersLive)

const title = document.getElementById("title")
const newSpan = document.createElement("span")
// console.log("newSpan", newSpan)
newSpan.classList.add("letter")
newSpan.textContent = "!"
title.append(newSpan)

console.log(allLettersLive)
// console.log(allDOMLetters)

// To chek out the console log, we'll use the browser console!
// console.log(allDOMLetters)
const arrayOfLiveLetters = [...allLettersLive]
arrayOfLiveLetters.forEach((letter) => {
	letter.style.color = getRandomColor()
})

function getRandomColor() {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return `rgb(${r} ${g} ${b})`
}

const myParagraph = document.querySelector("p.special.important")
const whichParagraph = document.querySelector("p")
console.log("whichParagraph", whichParagraph)

const spanInMyParagraph = myParagraph.querySelectorAll("span")

spanInMyParagraph.forEach((span) => {
	if (span.className === "foo") {
		span.style.fontSize = "2rem"
	} else {
		makeThatSpanBlink(span)
	}
})

function makeThatSpanBlink(span) {
	setInterval(() => {
		console.log(typeof span.style.opacity)
		if (span.style.opacity == 0) {
			span.style.opacity = 1
		} else {
			span.style.opacity = 0
		}
	}, 1000)
}

// Getting the closest element (Upward!)

const row = theSpecialOne.closest("tr")
