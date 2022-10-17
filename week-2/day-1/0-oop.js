// OOP is known as Object Oriented Programming and is called a Paradigm

const student1 = {
	name: "Amelie",
	energyLevel: 10,
	experience: 5,
	practiceJavaScript() {
		if (this.energyLevel < 2) {
			return console.log(`${this.name} has only ${this.energyLevel} energy!`)
		}
		this.energyLevel -= 2
		this.experience += 5
	},
	grabASweet() {
		this.energyLevel += 4
	},
	displayInfos() {
		console.log(
			`${this.name} has xp: ${this.experience} and ${this.energyLevel} energy.`
		)
	},
}
const student2 = {
	name: "Ines",
	energyLevel: 10,
	experience: 5,
	practiceJavaScript() {
		if (this.energyLevel < 2) {
			return console.log(`${this.name} has only ${this.energyLevel} energy!`)
		}
		this.energyLevel -= 2
		this.experience += 5
	},
	grabASweet() {
		this.energyLevel += 4
	},
	displayInfos() {
		console.log(
			`${this.name} has xp: ${this.experience} and ${this.energyLevel} energy.`
		)
	},
}

student1.practiceJavaScript()
student1.practiceJavaScript()
student1.practiceJavaScript()
student1.displayInfos()
student1.practiceJavaScript()
student1.practiceJavaScript()
student1.practiceJavaScript()
student1.displayInfos()
student1.grabASweet()
student1.displayInfos()
