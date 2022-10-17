class Person {
	constructor(name, age, size) {
		this.name = name
		this.age = age
		this.size = size
		this.startingPoint = 0
	}
	move() {
		this.startingPoint++
	}
	scream() {
		console.log(`Youhou!`)
	}
}

class Adult extends Person {
	constructor(name, age, size, runningSpeed) {
		super(name, age, size)
		// in kmph
		this.runningSpeed = runningSpeed
	}
	move() {
		// Execute the parent method
		// super.move()
		this.startingPoint += this.runningSpeed
	}
}

class Athlet extends Adult {
	sprint() {
		this.runningSpeed += 10
		console.log("Sprinting!")
	}
	stopSprinting() {
		this.runningSpeed -= 10
		console.log("Stopped Sprinting!")
	}
}

class Race {
	constructor(endPoint) {
		this.endPoint = endPoint

		this.participants = []
		this.isRaceFinished = false
	}

	addParticipant(participant) {
		this.participants.push(participant)
	}

	winRace(participant) {
		console.log(`${participant.name} won the race!`)
	}

	start() {
		while (!this.isRaceFinished) {
			for (const runner of this.participants) {
				if (runner instanceof Athlet) {
					if (Math.random() > 0.5) {
						runner.sprint()
						runner.move()
						runner.stopSprinting()
					} else {
						runner.move()
					}
				} else {
					runner.move()
				}

				console.log(
					`${runner.name} has just moved and he is at a distance of ${runner.startingPoint}`
				)
				if (runner.startingPoint >= this.endPoint) {
					this.isRaceFinished = true
					this.winRace(runner)
					break
				}
			}
		}
	}
}

const race = new Race(1500)
const baptiste = new Adult("Baptiste", 35, 173, 25)
const usainBolt = new Athlet("Usain", 30, 180, 33)

race.addParticipant(baptiste)
race.addParticipant(usainBolt)

race.start()
