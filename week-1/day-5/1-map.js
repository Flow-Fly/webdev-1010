// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// Map
const numbers = [1, 2, 3, 4, 5, 6, 78, 9]

let newArray = []
for (const num of numbers) {
	const newNumber = num * 2
	newArray.push(newNumber)
}

const multipliedNumbers = numbers.map((element) => element * 2)

console.log(newArray)

// const multipliedNumbers = numbers.map((element) => {
// 	return element * 2
// })

console.log(numbers)
console.log(multipliedNumbers)

const fridge = [
	{
		name: "Tomatoes",
		quantity: 5,
	},
	{
		name: "Carrots",
		quantity: 2,
	},
	{
		name: "Salad",
		quantity: 1,
	},
	{
		name: "Beers",
		quantity: 12,
	},
]

const allOfTheItems = fridge.map((element) => {
	return `I have ${element.quantity} ${element.name} in my fridge`
})

console.log(allOfTheItems)

const moreThanFive = fridge.map((element) => {
	if (element.quantity >= 5) {
		return element
	} else {
		return `Not enough of ${element.name}`
	}
})

console.log(moreThanFive)
