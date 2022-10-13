// Basic data structures
const user = {
	name: "John",
	username: "Doe",
	street: "Street of coding",
	country: "France",
}
const otherUser = {
	name: "John",
	username: "Doe",
	address: {
		street: "Street of coding",
		country: "France",
	},
}

const myName = "Toto"

const students = [
	{
		name: "Alice",
		age: 25,
	},
	{
		name: "Bob",
		age: 27,
	},
	{
		name: "Toto",
		age: 35,
	},
	{
		name: "Flo",
		age: 32,
	},
]

students[1].age = 55

console.log(students)
