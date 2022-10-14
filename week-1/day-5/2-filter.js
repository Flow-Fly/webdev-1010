// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const fridge = [
	{
		name: "Tomatoes",
		quantity: 5,
	},
	{
		name: "Tuna",
		quantity: 12,
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

const myFilteredArray = fridge.filter((element) => {
	element.quantity >= 5
	// if (element.quantity >= 5) {
	// 	return true
	// } else {
	// 	return false
	// }
})

const filterWithImplicitReturn = fridge.filter((el) => {
	return el.name.startsWith("T")
})

const foods = []
for (const food of fridge) {
	console.log(food)
	// Don't get confused by contains vs includes :)
	if (food.name.includes("o")) {
		foods.push(food)
	}
}
console.log("Classic loop: ", foods)
// const myMappedArray = fridge.map((element) => {
// 	if (element.quantity >= 5) {
// 		return true
// 	} else {
// 		return false
// 	}
// })

console.log("myFilteredArray", myFilteredArray)
// console.log("myMappedArray", myMappedArray)
console.log("fridge", fridge)
console.log("filterWithImplicitReturn", filterWithImplicitReturn)
