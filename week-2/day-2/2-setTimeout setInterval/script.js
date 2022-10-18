const number = document.getElementById("number")
number.textContent = 0
console.log(number)

let intervalId = null
let intervalId2 = null
let counter = 0

intervalId = setInterval(() => {
	console.log(counter, intervalId)
	number.textContent = counter
	number.style.color = getRandomColor()
	// if (counter === 5) {
	// 	clearInterval(intervalId)
	// 	console.log(intervalId)
	// }
	counter++
}, 1000)

function getRandomColor() {
	let r = Math.random() * 255
	let g = Math.random() * 255
	let b = Math.random() * 255
	return `rgb(${r} ${g} ${b})`
}

// intervalId2 = setInterval(() => {
// 	console.log(counter, intervalId2)
// 	if (counter === 500) {
// 		clearInterval(intervalId2)
// 	}
// 	counter++
// }, 10)

console.log("Hello!")
