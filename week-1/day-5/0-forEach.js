//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const numbers = ["Hey", 2, { apples: 5 }, 5, 4, 8, 5, 2, 4, 8]

// for (let number of numbers) {
// 	console.log(number)
// }

// numbers.forEach(function (el) {
// 	console.log(el)
// })
numbers.forEach((el) => {
	return (el = 6)
})
console.log(numbers)
// function sum(a, b, c) {
// 	return a + b + c
// }

// console.log(sum(4, 5))

const names = ["Illiu", "Loop", "Felix", "The Cat", "Alfred"]

function sayHello(name) {
	console.log(`Well, hello ${name}`)
}

const forEachReturns = names.forEach((cat) => sayHello(cat))
const mapReturns = names.map((cat) => sayHello(cat))

console.log("forEach: ", forEachReturns)
console.log("map: ", mapReturns)
