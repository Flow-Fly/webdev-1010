const directions = [
	"Starting point: Ironhack Miami",
	"↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
	"➔ Turn right onto S Miami Ave",
	"* Chipotle Mexican Grill 891 S Miami Ave, Miami",
]

function getDirectionsPromises(step) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!directions[step]) {
				reject("No direction fella !")
			}
			resolve(directions[step])
		}, 2000)
	})
}

const arrayOfPromises = directions.map((el, i) => {
	return getDirectionsPromises(i)
})
console.log(arrayOfPromises)

async function getAllDirections() {
	try {
		Promise.all(arrayOfPromises).then((x) => console.log(x))
		console.log(allDirections)
	} catch (error) {
		console.error(error)
	}
}
