require("./../db/index")
const Pet = require("./../models/Pet.model.js")

const pets = [
	{
		name: "Odin",
		petType: "dog",
	},
	{
		name: "Loki",
		petType: "dog",
	},
	{
		name: "Illiou",
		petType: "cat",
	},
	{
		name: "Chirpy",
		petType: "bird",
	},
	{
		name: "Zouzou",
		petType: "cat",
	},
	{
		name: "Pipa",
		petType: "bird",
	},
]

seed()

async function seed() {
	await Pet.deleteMany()
	await Pet.create(pets)
}
