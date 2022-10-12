/**
 * Our very first bit of logic!
 */

const isItSunnyToday = true
let iAmHungry = true
// if (condition(true/false)) {
//   Do something here
// }
if (isItSunnyToday && iAmHungry) {
	console.log("Let's all eat on the terasse!")
	iAmHungry = false
} else {
	console.log("It's not sunny because isItSunnyToday is: ", isItSunnyToday)
}

if (isItSunnyToday && iAmHungry) {
	console.log("Let's all eat on the terasse!")
	iAmHungry = false
} else {
	console.log(
		"It's not sunny because iAmHungry || isItSunny is: ",
		isItSunnyToday,
		iAmHungry
	)
}

if (isItSunnyToday || iAmHungry) {
	console.log("One of my statement is true !")
}

const cutenessLevelOfIlliu = 5
const cutenessLevelOfPlushy = 7

if (cutenessLevelOfIlliu > cutenessLevelOfPlushy) {
	console.log("My cat is cute !")
} else if (cutenessLevelOfIlliu === cutenessLevelOfPlushy) {
	console.log("They are marvellous")
} else if (cutenessLevelOfPlushy > 5) {
	console.log("The plush is rather nice, and perhaps cuter than Illiu")
}

const classSize = 18

//  Ternaries : condition ? if that's true : else
let isEveryoneHere = classSize === 20 ? true : false

console.log(isEveryoneHere)

isEveryoneHere =
	classSize === 20
		? "Everyone is here"
		: `We are missing ${20 - classSize} people`

console.log(isEveryoneHere)

const myName = "Flo"

if (myName) {
	console.log(`Hello ${myName}`)
} else {
	console.log("You have no name ")
}
