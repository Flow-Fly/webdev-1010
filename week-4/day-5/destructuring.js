const cat = {
	name: "Zouzou",
	age: 4,
	isCute: true,
}

const dog = {
	name: "Robert",
	age: 6,
	isCute: true,
}

// const catName = cat.name
// const catAge = cat.age
// const catIsCute = cat.isCute

let { name, age, isCute } = cat

console.log(name, age, isCute)

let { name: dogName, age: dogAge, isCute: cuteDog } = dog

console.log(dogName, dogAge, cuteDog)

// function sayHello(person) {
// 	console.log(`Hello, ${person.firstname} ${person.lastname}`)
// }
function sayHello({ firstname, lastname }) {
	console.log(`Hello, ${firstname} ${lastname}`)
}

const person = { firstname: "Terrence", lastname: "Hector" }

sayHello(person)

const allUsers = [{ name: "Bob" }, { name: "Alice" }, { name: "John" }]

const data = { allUsers }

console.log(data)

// const user = {
// 	name: "Doe",
// 	age: 42,
// 	address: {
// 		city: "That City in a place",
// 		zipCode: 123456,
// 	},
// 	phoneNumber: "01234567",
// }

// const { name: username, age: userAge, address, phoneNumber } = user

// const copy = {
//   username,
//   userAge,
//   address,
//   phoneNumber
// }

// app.get("/user", async (req, res) => {
// 	try {
// 		const currentUser = await User.findById(id)
// 		res.render("profile", { currentUser })
// 	} catch (error) {
// 		console.log(error)
// 	}
// })

const students = ["Amelie", "Sam", "Ines", "Shruti", "Maurine"]

const [firstStudent, secondStudent, ...restOfStudents] = students

console.log(firstStudent)
console.log(secondStudent)
console.log(restOfStudents)

function add(...numbers) {
	return numbers.reduce((acc, val) => acc + val, 0)
}

console.log(add(2, 3))
console.log(add(2, 3, 7, 45, 64))

let a = 5
let b = 9

;[a, b] = [b, a]

console.log(a, b)

const animals = ["girafe", "chimp", "dolphin"]

const food = ["banana", "coconut", "apple"]

const combinedArray = [...animals, ...food]
console.log(combinedArray)

const aDisneyBadGuy = {
	name: "Raspoutine",
	age: 47,
	visited: [
		{
			country: "Russia",
			city: ["St-Petersburg", "Moskow"],
		},
		{
			country: "France",
			city: ["Paris"],
		},
	],
}

const {
	visited: [
		,
		{
			city: [element],
		},
	],
} = aDisneyBadGuy

console.log(element)

document.addEventListener("click", ({ target }) => {
	// const target = event.target
})
