// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbers = [5, 4, 78, 8, 3]

const sum = numbers.reduce((accumulator, value) => {
	// console.log(accumulator, value)
	// Always return the accumulator
	return accumulator + value
}, 0)

const otherSum = numbers.reduce((acc, val) => acc + val, 0)
console.log(otherSum)

const fridge = [
	{
		name: "Pina",
		quantity: 5,
	},
	{
		name: "Mozarella",
		quantity: 12,
	},
	{
		name: "Parmigiano",
		quantity: 2,
	},
	{
		name: "Pomodori",
		quantity: 1,
	},
	{
		name: "Buratta",
		quantity: 12,
	},
]

const allQuantities = fridge.reduce((acc, val) => {
	// console.log(val)
	acc[val.name] = val.quantity
	console.log(acc)
	return acc
}, {})

const filteredPineApples = fridge.reduce((acc, val) => {
	if (val.name === "Pina") {
		return acc
	}
	acc.push(val)
	return acc
}, [])

console.log(filteredPineApples)
