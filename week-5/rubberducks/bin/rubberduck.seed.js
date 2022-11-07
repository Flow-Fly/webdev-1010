// const { Rubberduck, hello } = require("./../models/Rubberduck.model")
require("./../config/mongo")
const Rubberduck = require("./../models/Rubberduck.model")
const ducks = require("./../ducks.json")

seed()

async function seed() {
	await cleanDatabase()
	const amountOfDucks = await createRubberducks()
	console.log(`Created ${amountOfDucks} ducks`)
	process.exit()
}

async function cleanDatabase() {
	await Rubberduck.deleteMany()
}

async function createRubberducks() {
	const allDucks = await Rubberduck.create(ducks)
	return allDucks.length
}
