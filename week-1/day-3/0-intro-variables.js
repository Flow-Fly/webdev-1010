/**
 * Welcome to JavaScript !
 * Let's start with the basics 🐻
 */

/**
 * String
 * Number
 * Boolean
 * null
 * undefined
 * Object
 *  - Array
 *  - Object
 *  Function (which is an Object aswell)
 *
 * BigInt
 * Symbols
 *
 */

// Name of the variable - Value

let myVariable
console.log("MyVariable is: ", myVariable)
// Can't redeclare a variable with the same name
// let myVariable

// Reassigning a variable
myVariable = "Hello JavaScript!"
console.log("MyVariable is: ", myVariable)
// We can change the type of a Variable
myVariable = 123
console.log("MyVariable is: ", myVariable)

// const allow us to declare a variable which won't change
const aConstantVariable = "I can't change!"

// This will result in an error
// aConstantVariable = 123
// console.log("aConstantVariable: ", aConstantVariable)

// Can't access a variable before initialization
// console.log(aBuggyVariable)

// let aBuggyVariable = `I can't be displayed !`

let $variableStartingWithDollar
// let #kid
// let 123test
let myVariable2

/**
 * Different casing in use
 */
// Do's
let camelCase
let ALL_CAPS
// Don't
// let kebab-case
let snake_case
let NaMeOfAVaRiABlE
let nameofavariable
