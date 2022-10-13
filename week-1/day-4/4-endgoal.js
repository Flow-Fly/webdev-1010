function getMyAvailableMoney() {
	const allMyEarnings = getAllEarnings()
	const allExpenses = getAllExpenses()
	const availableMoney = calculateRemainingMoney(allExpenses, allMyEarnings)
	return availableMoney
}

function getAllEarnings() {}
function getAllExpenses() {}
function calculateRemainingMoney() {}

function startGame() {
	displayPlayer()
	displayEnemies()
	createTheBoard()
}

function displayPlayer() {
	const position = getPlayerPosition()
	putPlayerInCell(position)
}
