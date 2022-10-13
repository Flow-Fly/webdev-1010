// Simple odd-even
for (let i = 1; i <= 20; i++) {
	// if (i % 2 === 0) {
	// 	console.log(`${i} is even`)
	// } else {
	// 	console.log(`${i} is odd`)
	// }
	console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`)
}

// Fizzbuzz

for (let i = 1; i < 21; i++) {
	const oddOrEven = i % 2 === 0 ? "even" : "odd"

	let fizzBuzzPart = i

	if (i % 3 === 0 && i % 5 === 0) {
		fizzBuzzPart = "fizzbuzz"
	} else if (i % 3 === 0) {
		fizzBuzzPart = "fizz"
	} else if (i % 5 === 0) {
		fizzBuzzPart = "buzz"
	}
	console.log(`${fizzBuzzPart} is ${oddOrEven}`)
}
