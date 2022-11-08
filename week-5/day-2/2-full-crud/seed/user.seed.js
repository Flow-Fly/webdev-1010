require("./../db/index")
const User = require("./../models/User.model.js")
const Pet = require("./../models/Pet.model")
const studentData = require("./../../../../students.json")
const users = studentData
	.filter((student) => student.status === "student")
	.map((student) => {
		return {
			username: student.name,
			pets: [],
		}
	})

seed()

async function seed() {
	await User.deleteMany()
	const allPets = await Pet.find()
	for (const pet of allPets) {
		const petLessUser = users.find((user) => user.pets.length === 0)
		petLessUser.pets.push(pet._id)
		console.log("petlessuser: ", petLessUser)
	}

	console.log("all users: ", users)
	await User.create(users)
}
