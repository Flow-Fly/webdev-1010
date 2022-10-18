const myArray = [1, 2, 3, 4, 5]

const copy = myArray

copy[0] = 12

console.log(myArray)

let myNum = 2

let copyOfMyNum = myNum

copyOfMyNum = 7

console.log(myNum)

let immutableString = "I can't be mutated"

immutableString[3] = "Y"
console.log(immutableString)

immutableString = `${immutableString.slice(0, 3)}Y${immutableString.slice(4)}`

console.log(immutableString)
