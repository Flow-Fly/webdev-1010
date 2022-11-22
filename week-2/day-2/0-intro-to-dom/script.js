// When using DOM, always get the element you want to modify

// In strict mode (js file loaded with a type="module")
// You can't create a global variable with no let/const declaration
// myUndeclaredVariable = "Noooooo"
// console.log(myUndeclaredVariable)

// anotherUndeclaredVariable = "YEEEEES"
// console.log(anotherUndeclaredVariable)

// document.addEventListener("DOMContentLoaded", () => {

// const resultElement = document.getElementById("message")

Array.prototype.asyncForEach = async function (cb) {
	for (let i = 0; i < this.length; i++) {
		const el = this[i]
		await cb(el, i, this)
	}
}

Array.prototype.forEach = () => {
	console.log("Doh")
}

async function sleep(x) {
	return new Promise((acc, rej) => {
		setTimeout(() => {
			acc(x)
		}, 2000)
	})
}

const messages = [
	"Sleep well",
	"Eat fruit and veg",
	"Pay attention in class",
	"Ask questions in class",
	"Ask questions in labs",
	"Revise key concepts at home",
	"Work on your own projects",
	"Watch videos online",
	"Practice with katas",
	"Work in pairs",
	"Console log everything",
]

messages.asyncForEach(async (el, i, arr) => {
	console.log(await sleep(el))
	console.log("hey")
})

// // EFFECT (side effect/function/thing we want to happen)
// const changeText = () => {
// 	const newText = messages[Math.floor(Math.random() * messages.length)]
// 	resultElement.textContent = newText
// }

// // INTERVAL instead of the usual EVENT
// setInterval(changeText, 2000)
// // })
