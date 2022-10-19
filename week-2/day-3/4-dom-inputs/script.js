const textInput = document.querySelector("#text-input")
const colorInput = document.querySelector("#color-input")
const numberInput = document.querySelector("#number-input")
const buttonElement = document.querySelector("#create-recap")
const container = document.querySelector(".container")

textInput.addEventListener("input", handleInput)
colorInput.addEventListener("input", handleInput)
numberInput.addEventListener("input", handleInput)

function handleInput(event) {
	console.log(event.target, event.target.value)
}

buttonElement.addEventListener("click", createARecap)

function createARecap() {
	const template = document.getElementById("template")
	const clone = template.content.cloneNode(true)
	console.log(clone)

	clone.querySelector(".text").textContent = textInput.value
	clone.querySelector(".color").textContent = colorInput.value
	clone.querySelector(".number").textContent = numberInput.value
	clone.querySelector("ul").style.backgroundColor = colorInput.value
	container.append(clone)
}
