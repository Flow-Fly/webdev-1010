// Callback Hell
const directions = [
	"Starting point: Ironhack Miami",
	"↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
	"➔ Turn right onto S Miami Ave",
	"* Chipotle Mexican Grill 891 S Miami Ave, Miami",
]

function getDirection(step, callback, errorCallback) {
	console.log(directions[step])
	if (!directions[step]) {
		errorCallback("Error, no direction")
	} else {
		setTimeout(() => {
			callback()
		}, 2000)
	}
}

// getDirection(
// 	0,
// 	() => {
// 		getDirection(
// 			1,
// 			() => {
// 				getDirection(
// 					2,
// 					() => {
// 						getDirection(3, () => {}, printError)
// 					},
// 					printError
// 				)
// 			},
// 			printError
// 		)
// 	},
// 	printError
// )

function printError(error) {
	console.error(error)
}

// Here come the promises !
// Promise definition: A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Promise allows us to handle asynchronous operations in a more synchronous fashion.

// Promise syntax, you probably will rarely create your own Promises but let's dissecate how they are created!

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (Math.random() > 0.5) {
// 			resolve("Promise resolved !")
// 		} else {
// 			reject(Error("math.random did not wanted me !"))
// 		}
// 	}, 500)
// })
// console.log(promise)

// promise
// 	.then((resolved) => console.log(resolved))
// 	.catch((rejected) => console.log(rejected))

// Promise states
// Pending. When a Promise gets created it is in a pending state, until it gets fulfilled or rejected.
// Fulfilled. When the resolve() is called the Promise goes to a fulfilled state.
// Rejected. When the reject() is called, or if an Error is thrown, the Promise becomes rejected.

// getDirectionsPromises(i)
// 	.then((value) => {
// 		console.log("Value", value)
// 		// We know that the previous function is finished
// 		return getDirectionsPromises(value)
// 	})
// 	.then((value) => {
// 		console.log("Value", value)
// 		// We know that the previous function is finished
// 		return getDirectionsPromises(value)
// 	})
// 	.then((value) => {
// 		console.log("Value", value)
// 		// We know that the previous function is finished
// 		return getDirectionsPromises(value)
// 	})
// 	.catch(() => console.error("Something went wrong"))

// connectToDatabase()
// .then((data) => {
//   //use data from DB inside
// })
// .catch(() => {
//   console.error('Connection fails');
// })

// Let's introduce the async await syntax

// async function asyncAwait() {
// 	try {
// 		await getDirectionsPromises(0)
// 		await getDirectionsPromises(1)
// 		await getDirectionsPromises(2)
// 		await getDirectionsPromises(10)
// 	} catch (error) {
// 		console.error(error)
// 	}
// }
// asyncAwait()
function getDirectionsPromises(step) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!directions[step]) {
				reject("No direction fella !")
			}
			console.log(directions[step])

			resolve(++step)
		}, 2000)
	})
}

// Promise.all -> run some code only after multiple promises have been fulfilled
// Takes an array of pending promises and once they are all resolved, give them as callback

const arrayOfPromises = directions.map((direction, i) => {
	return getDirectionsPromises(i)
})

Promise.all(arrayOfPromises)
	.then((response) => {
		console.log(response)
	})
	.catch((error) => {
		console.log(error)
	})
