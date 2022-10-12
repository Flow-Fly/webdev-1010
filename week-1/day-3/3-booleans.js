/**
 * Booleans, truth vs truthiness, guards..
 */

const isItRainingToday = false

const isItWednesday = true

console.log(Boolean(2))
console.log(Boolean(0))
// Truthy value
console.log(Boolean("a string"))
// An empty array is truthy
console.log(Boolean([]))
// an empty Object is truthy
console.log(Boolean({}))
// a non emtpy string is truthy
console.log(Boolean("a string"))
// Falthy value
console.log(Boolean(""))

console.log(true + true)
console.log(true + false)

const truthyVariable = "String" && false && "" && []

console.log(truthyVariable)
