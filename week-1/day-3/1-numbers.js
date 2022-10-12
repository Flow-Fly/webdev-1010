/**
 * Let's talk about Math
 */

let classSize = 17
classSize = 20

// classSize = classSize + 5
// Shortand property
classSize += 5

console.log("classSize", classSize)

// Mathematical operations:
/**
 * add: +
 * substract: -
 * multiply: *
 * divide: /
 * power: **
 * modulo: %
 */

console.log(7 % 2)

console.log(15545646 % 60)

console.log(2 ** 10)

let halfClass = classSize / 2

console.log(halfClass)

console.log((0.1 + 0.2).toFixed(1))
console.log(0.3 + 0.6)

const pi = Math.PI
console.log(pi)

// Order of operations
console.log(Math.max(5, -2, 25, 54))

console.log(Math.ceil(0.1))
console.log(Math.floor(1.9))
console.log(Math.round(1.9))

console.log(Math.random())
console.log(Math.random() * 10)

// Get a random integer clamped between two values

console.log("We are watching here: ", Math.floor(Math.random() * 5) + 5)
console.log(typeof (Math.random() * 10).toFixed())
