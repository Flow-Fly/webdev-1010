/**
 * We want to be able to "write text"
 * (And a bit of coercion, casting/conversion, search)
 */

// prettier-ignore
let myself = "Flo\"rian"
let theBestTA = `Haroun`
// prettier-ignore
let singleQuotes = 'Hey !'

let aFirstVariable = "Hello",
	anotherVariable,
	anotherOne = 132,
	aWeirdWayOfDeclaringString = String("Well hello there!")
// four ways of declaring Strings

/**
 * single quotes: ''
 * double quotes: ""
 * backtick: ``
 * String
 */

console.log("10" - "5")
console.log("10" + "5")
// Cast as numbers
console.log("10" + Number("5"))
console.log(Number("10") + Number("5"))
console.log("10" * 1 + "5" * 1)
console.log(+"10" + +"5")

console.log("Hey, my name is " + myself + " nice to see you!")

console.log(`Hey again, coffee break soon, signed: ${myself}`)

let aParagraphOfText = "Hello\nI am on a new line!\nAnd so am I!"

console.log(aParagraphOfText)
let aBetterParagraph = `Hey
I am a new line


Different line`

// Some methods

console.log(aBetterParagraph.startsWith("Hey"))
console.log(aBetterParagraph.endsWith("Hey"))

// Useful methods

console.log(aBetterParagraph[0])
console.log(aBetterParagraph[aBetterParagraph.length - 1])
console.log(aBetterParagraph.at(-2))
console.log(aBetterParagraph.includes("am a new"))
console.log(aBetterParagraph.length)

// Immutability

let olympeName = "Olimpe"
olympeName[2] = "i"

let olympeNewName = olympeName.slice(0, 2) + "y" + olympeName.slice(3)

let capitalLettersEverywhere = olympeNewName.toUpperCase()

console.log("capitalLettersEverywhere", capitalLettersEverywhere)

let myFirstElementToCompare = "It's Sunny Today"
let mySecondElementToCompare = "it's sunny today"

console.log(
	myFirstElementToCompare.toLowerCase() ===
		mySecondElementToCompare.toLowerCase()
)

console.log(
	"actual String: ",
	typeof "aString",
	"Object wrapping a String: ",
	typeof new String("Hey")
)
