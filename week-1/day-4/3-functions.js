// 4 types of functions

// "Classic one": function declaration
// function expression
// Arrow functions
// generator functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

const resultOfMyFunctionExecution = nameOfMyFunction(2, 17, 4)

console.log(resultOfMyFunctionExecution)
/**
 * Function syntax:
 * Parameters, Arguments, Return
 */

function nameOfMyFunction(a, b, c) {
	return a + b + c
	console.log("I won't run !")
}

function maxOf(a, b) {
	if (a > b) {
		return a
	} else if (b > a) {
		return b
	}
	return "Both numbers are equals"
}

console.log(maxOf(100, 5))
console.log(maxOf(1, 5))
console.log(maxOf(100, 100))

const students = [
	{
		name: "Bob",
		age: 64,
	},
	{
		name: "John",
		age: 32,
	},
	{
		name: "Alice",
		age: 25,
	},
]

function getTheOldestStudent(arrayOfStudents) {
	let maxAge = -Infinity
	let oldestStudent = null
	for (const student of arrayOfStudents) {
		if (student.age > maxAge) {
			maxAge = student.age
			oldestStudent = student.name
		}
	}
	return `The oldest student is ${oldestStudent}, being ${maxAge}`
}

console.log(getTheOldestStudent(students))

function getTheAverageAge(arrayOfStudents) {
	let sum = 0
	for (const student of arrayOfStudents) {
		sum += student.age
	}
	return Number((sum / arrayOfStudents.length).toFixed(2))
}

console.log(typeof getTheAverageAge(students))

const anotherSumFunction = function (...numbers) {
	console.log(numbers)
	let sum = 0
	for (const num of numbers) {
		sum += num
	}
	return sum
}
console.log(anotherSumFunction(1, 3, 5, 4, 8, 5, 4, 8, 5, 4, 9, 9, 47, 7))

anotherSumFunction()

const simpleAdd = (a, b) => {
	// Do something else
	return a + b
}

// Implicit return
//  const simpleAdd = (a, b) => a + b
console.log(simpleAdd(7, 3))
