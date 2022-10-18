// JavaScript, at its core, is a single-threaded and synchronous language
// single-threaded - only one block of code is executed at the time
// synchronous - the code gets executed line by line, from top to bottom, in the order in which they are put in

// Async functions allow us to continue executing our code while the async function is being executed in the background.
//  What this exactly means is: our users will be able to use the app while the data is loading,
//  otherwise, our app would be irresponsive and this would cause a bad user experience.

// What is a Callback and where did we used them until now???
// A review =>

// const students = [
// 	{
// 		name: "Bob",
// 		grade: 7,
// 	},
// 	{
// 		name: "John",
// 		grade: 4,
// 	},
// 	{
// 		name: "Doe",
// 		grade: 8,
// 	},
// 	{
// 		name: "Alice",
// 		grade: 10,
// 	},
// ]

// const getGradeSuperiorTo6 = (el) => el.grade > 6

// console.log(students.filter(getGradeSuperiorTo6))

// students.forEach((element) => {
// 	console.log(element)
// })

// function willExecuteACallback(callback) {
// 	console.log("I am going to execute:", callback)
// 	if (Math.random() > 0.5) {
// 		callback()
// 	}
// }

// willExecuteACallback(iAmGoingToBeACallback)

// function iAmGoingToBeACallback() {
// 	console.log("I am executed by the other function")
// }

// 2 methods to handle async behavior:
// setTimeout     -> Do something after some time
// setInterval   -> Do something at a specific interval

// Base way of writing down those functions is:

setTimeout(() => {
	console.log("Please subscribe!")
}, 2000)

let counter = 0

// setInterval and setTimeout both return an integer ID

let intervalId = setInterval(() => {
	console.log(counter)
	counter++
	console.log("interval ID: ", intervalId)
}, 1000)
