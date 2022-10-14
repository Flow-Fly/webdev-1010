// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const unsortedNumbers = [9, 5, 6, 3, 7, 10, 2546]

const copyOfMyNumbers = [...unsortedNumbers]

const unsortedNames = [
	"Zoro",
	"bruno",
	"Toto",
	"Amine",
	"Jack",
	"belchior",
	"haroun",
]

const newSortedArray = copyOfMyNumbers.sort((a, b) => {
	// a: 7, b: 10
	//     7 > 10 ? false
	// if (a > b) {
	// 	return 1
	// } else if (b > a) {
	//  10 > 7 ? true hence we return a negative number which is going
	//  To switch the positions
	// 	return -1
	// } else {
	// 	return 0
	// }
	console.log(a, b)
	return a - b
})

console.log(newSortedArray)
console.log("original array", unsortedNumbers)
