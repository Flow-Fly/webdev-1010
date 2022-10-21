const grid = document.getElementById("game")
const startButton = document.getElementById("start")
const rows = 10
const columns = 10
let playerPosition = 10
const cells = []
const amountOfEnemies = 10

startButton.addEventListener("click", startGame)

function startGame() {
	createCells()
	showPlayer()
	addEnemies()
}

function addEnemies() {
	for (let i = 0; i < amountOfEnemies; i++) {
		const freeCells = document.querySelectorAll(".cell:not(.player, .bad-guy)")
		const randomCell = freeCells[Math.floor(Math.random() * freeCells.length)]
		randomCell.classList.add("bad-guy")
	}
}

function createCells() {
	for (let i = 0; i < rows * columns; i++) {
		const cell = document.createElement("div")
		cell.classList.add("cell")
		cell.textContent = i
		grid.append(cell)
		cells.push(cell)
	}
}

function showPlayer() {
	cells[playerPosition].classList.add("player")
}

function removePlayer() {
	cells[playerPosition].classList.remove("player")
}

document.addEventListener("keydown", (event) => {
	switch (event.key) {
		case "ArrowUp":
			if (playerPosition < 10) {
				break
			}
			move(-10)
			break
		case "ArrowDown":
			if (playerPosition >= 90) {
				break
			}
			move(10)
			break
		case "ArrowLeft":
			if (playerPosition % 10 === 0) {
				break
			}
			move(-1)
			break
		case "ArrowRight":
			if (playerPosition % 10 === 9) {
				break
			}
			move(1)
			break
	}
})

function move(number) {
	removePlayer()
	playerPosition += number
	showPlayer()
}
