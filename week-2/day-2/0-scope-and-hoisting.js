// What is a scope
// Accessing a variable declared with(let or const) before initialization will result in and Error
// console.log(generalScopeVariable)
const generalScopeVariable = "I am declared in the generalScope"

// Accessing declared with var before defining it will just result to undefined
console.log(iAmDeclaredAtTheEndOfTheFile)

console.log(sayHello("Loop"))

let myVariable = 5
if (true) {
	var innerScopeVariable = "Hello"
}
aRandomFunction()

var i = 5
console.log(innerScopeVariable)

function aRandomFunction() {
	for (var i = 0; i < 20; i++) {
		console.log(generalScopeVariable)
	}
	let innerScope1 = 1
	if (true) {
		const innerScope2 = 2
		if (true) {
			const innerScope1 = "Shadow"
			console.log(innerScope1)
		}
	}
}

console.log(i)

const name = "Flo"

const array = [1, 2, 3, 4, 5]

array.forEach((element) => {
	console.log(name)
})

var iAmDeclaredAtTheEndOfTheFile = true

var myNumber = 8
console.log(myNumber)

if (true) {
	var myNumber = 10
	console.log(myNumber)
}

console.log(myNumber)

function sayHello(name) {
	console.log(sayBye(name))

	function sayBye(parameter) {
		return `Bye, ${parameter}`
	}
	return `Hello ${name}!`
}
