const cat = {
	name: "Zouzou",
	age: 7,
	isCute: true,
	details: {
		superPowers: ["Sleeping", "Eating", "Maw"],
		hobbies: ["Sleeping on a keyboard", "Pretending to be scary"],
		"weekday whereabout": [
			{ day: "Monday", location: "Garage", activity: "Making a mess" },
			{ day: "Tuesday", location: "Living-room", activity: "Sleeping" },
			{ day: "Wednesday", location: "Bedroom", activity: "Warming the bed" },
		],
	},
}

console.log(cat.details.hobbies[1])
console.log(cat.details.superPowers.length)

const weekDayWhereAbout = cat.details["weekday whereabout"]
for (const whereaboughrujaighaeikh of weekDayWhereAbout) {
	console.log(
		`On ${whereaboughrujaighaeikh.day}, my cat is in the ${whereaboughrujaighaeikh.location} and he is ${whereaboughrujaighaeikh.activity}`
	)
}

delete cat.age

for (const whereabout of weekDayWhereAbout) {
	if (whereabout.activity !== "Sleeping") {
		console.log(
			`On ${whereabout.day}, my cat is in the ${whereabout.location} and he is ${whereabout.activity}`
		)
	}
}

function getRandomElementFromArray(something) {
	// console.log("Provided array: ", something)
	// const randomFloatNumber = Math.random()
	// console.log("randomFloatNumber", randomFloatNumber)
	// const randomNumberMultiplied = randomFloatNumber * something.length
	// console.log("randomNumberMultiplied", randomNumberMultiplied)
	// const finalInteger = Math.floor(randomNumberMultiplied)
	// console.log("finalInteger", finalInteger)
	// console.log(something[finalInteger])
	const finalInteger = Math.floor(Math.random() * something.length)
	console.log(something[finalInteger])
	console.log(something[Math.floor(Math.random() * something.length)])
}

const arrayOfSuperpowers = cat.details["weekday whereabout"]
getRandomElementFromArray(arrayOfSuperpowers)
