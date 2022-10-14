// Copy by value
let a = 1
let b = a

b = 2

console.log(a, b)

const array = [1]
const fakeCopyOfArray = array

array[0] = "Hey"

fakeCopyOfArray[1] = "A new value"

console.log(array, fakeCopyOfArray)

const object = {
	name: "Hector",
}
const fakeCopyOfObject = object

fakeCopyOfObject.age = 35

console.log(object, fakeCopyOfObject)

// Shallow copy of an Object (Array)
const realCopyOfAnArray = [...array]
const realCopyOfAnObject = { ...object }
realCopyOfAnObject.anotherProperty = {}
realCopyOfAnArray[2] = 5

console.log(realCopyOfAnArray, array)
console.log(realCopyOfAnObject, object)

const nestedArray = [
	[1, 2, 3],
	5,
	{
		values: [1, 0, 2, 5, 4],
	},
]
const copyOfNestedArray = [...nestedArray]
copyOfNestedArray[0][2] = 99
console.log(nestedArray)

const deepCopy = JSON.parse(JSON.stringify(nestedArray))

console.log("Stringified Array: ", JSON.stringify(nestedArray))

deepCopy[0][0] = "Some new value"

console.log("deepCopy: ", deepCopy)
console.log("nestedArray: ", nestedArray)

// const students = [
// 	{ name: "Alfred", age: 24 },
// 	{ name: "Zoro", age: 12 },
// ]
