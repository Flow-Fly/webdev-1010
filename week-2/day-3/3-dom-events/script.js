// Check if everything is working
const titleElement = document.querySelector("h1")
const addPetButton = document.getElementById("add-pet-button")
const resetListButton = document.getElementById("reset-button")
// This is the list element
const listElement = document.getElementById("list")
console.log("Everything is fine!")

const animals = ["fish", "elephant", "wolf", "shark"]

// Adding a scroll event on the document
document.addEventListener("scroll", handleScroll)

// Checking if the mouse enter and leave the box of an element
titleElement.addEventListener("mouseenter", (event) => {
	event.target.classList.add("right")
})
titleElement.addEventListener("mouseleave", (event) => {
	event.target.classList.remove("right")
})

resetListButton.addEventListener("click", resetList)
addPetButton.addEventListener("click", handleClick)

function handleScroll(event) {
	console.log("A user is scrolling in the page")
}
// Adding a random <li> to the listElement
function handleClick(event) {
	console.log(listElement.innerHTML)
	console.log(listElement.textContent)
	const li = document.createElement("li")
	li.textContent = animals[Math.floor(Math.random() * animals.length)]
	// titleElement.append(li)
	listElement.append(li)

	// listElement.innerHTML += `<li class="never-happened">Fish</li>`
	// listElement.textContent += `<li class="never-happened">Fish</li>`
}

// Reset the list, emptying it's innerContent

function resetList() {
	// It works but feels like a side-effect
	// listElement.textContent = ""
	listElement.innerHTML = ""

	console.log(listElement.innerText, listElement.innerHTML)
}
