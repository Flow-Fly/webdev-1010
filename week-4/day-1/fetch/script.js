const container = document.querySelector(".container")
const button = document.querySelector(".get-poke")
button.addEventListener("click", getPokemon)

async function getPokemon() {
	// fetch("https://pokeapi.co/api/v2/pokemon")
	// 	.then((response) => {
	// 		return response.json()
	// 	})
	// 	.then((response) => {
	// 		console.log(response.results[0].name)
	// 	})

	// const rawResult = await fetch("https://pokeapi.co/api/v2/pokemon")
	// console.log(rawResult)
	// const data = await rawResult.json()
	// console.log(data.results[0].name)

	const randomNumber = Math.floor(Math.random() * 255) + 1
	try {
		const rawResult = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${randomNumber}`
		)
		const data = await rawResult.json()
		console.log(data.sprites.back_default)
		const img = new Image()
		img.src = data.sprites.back_default
		container.append(img)
	} catch (error) {
		console.error(error)
	}
}

getPokemon()
