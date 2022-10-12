/**
 * Fundations of a programming language (with the conditions)
 */

//  Don't do that 😁  Infinite loop incoming
// let counter = 0

// while (counter > 100) {
// 	console.log(counter)
// 	counter++
// }

let aRandomString = ""
const startTime = Date.now()

// do {
// 	if (Date.now() - startTime > 1000) {
// 		console.log("Breaking because of time")
// 		break
// 	}
// 	// if (aRandomString.includes("He")) {
// 	// 	break
// 	// }
// 	// aRandomString += "H"
// 	console.log("still running")
// } while (aRandomString.length < 1000000)

// console.log("aRandomString", aRandomString)

// For-loops

// for (initial value; condition; increment) { some Logic }
const i = "a String"

for (let j = 0; j < 25; j++) {
	console.log("i is: ", j)
}
for (let i = 0; i < 25; i += 2) {
	console.log("i is: ", i)
}

console.log(i)

for (let index = 10; index >= 0; index--) {
	console.log(index)
	if (index === 5) {
		break
	}
}

const someStudentsNames = [
	"Leo",
	"Olympe",
	"Baptiste",
	"Hugo",
	"Justine",
	"Yasemin",
	"Olesya",
]

for (let name = 0; name < someStudentsNames.length; name++) {
	const currentName = someStudentsNames[name]
	for (
		let letterCounter = 0;
		letterCounter < currentName.length;
		letterCounter++
	) {
		const currentLetter = currentName[letterCounter]
		console.log(currentLetter.toUpperCase())
	}
}

//  for-of loop

outerLoop: for (const element of someStudentsNames) {
	innerLoop: for (const letter of element) {
		console.log(letter)
		if (letter === "a") {
			continue outerLoop
		}
	}
}

// for-in loop

const bottleObject = {
	// Please don't do that
	"material of the bottle": "plastic",
	material: "glass",
	price: 3,
	capacity: 0.75,
	price: 5,
	key: "I do exist",
}

bottleObject.capacity = 2

let iWantToAccessThePriceProperty = "price"

console.log(bottleObject.price)
console.log(bottleObject["price"])
console.log(bottleObject[iWantToAccessThePriceProperty])

for (const key in bottleObject) {
	console.log("Name of the key", key, " has a value of: ", bottleObject[key])
}
