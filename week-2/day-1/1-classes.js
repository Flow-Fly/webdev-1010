const array = new Array()
const date = new Date()

// Pascal case to creat classes

class Pokemon {
	constructor(name, level, strength) {
		this.name = name
		this.level = level
		this.strength = strength
		this.isStunned = false
		this.health = 100
	}
	attack(pokemon) {
		if (this.isStunned) {
			console.log(`${this.name} is stunned!`)
			this.isStunned = false
			return
		}
		if (pokemon.health <= 0) {
			return console.log(`No need to beat the resting pokemon`)
		}
		this.displayInfos()
		// displayInfos()
		// Would result in a console.log stating "hello"
		pokemon.health -= this.strength
	}

	frightenEnemies(ennemy) {
		ennemy.isStunned = true
		console.log(`${ennemy.name} is now stunned by ${this.name}`)
	}

	displayInfos() {
		console.log(`${this.name} has ${this.health}hp.`)
	}

	// receiveDamage(amount) {
	// 	if (this.health <= 0) {
	// 	}
	// 	this.health -= amount
	// }
}

function displayInfos() {
	console.log("hello")
}

const bulbizarre = new Pokemon("Bulbi", 7, 25)
const pikachu = new Pokemon("Pikachu", 10, 5)

bulbizarre.attack(pikachu)

pikachu.frightenEnemies(bulbizarre)

bulbizarre.attack(pikachu)
bulbizarre.attack(pikachu)
bulbizarre.attack(pikachu)
bulbizarre.attack(pikachu)
bulbizarre.attack(pikachu)
bulbizarre.attack(pikachu)

console.log(pikachu.health)
