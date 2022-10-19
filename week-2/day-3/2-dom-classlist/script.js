const pictureElement = document.getElementById("autumn-wrapper")
const hiddenText = document.querySelector("p.hidden")

// console.log("picture classnames: ", pictureElement.className)
// pictureElement.className = "Hey"

pictureElement.classList.add("small")

pictureElement.classList.remove("test", "foo")

setTimeout(() => {
	pictureElement.classList.replace("small", "medium")
}, 1500)

if (pictureElement.classList.contains("bar")) {
	pictureElement.classList.add("rotate")
}

// I want to click on the picture and if I click on it i'll unhide the text

pictureElement.addEventListener("click", () => {
	// hiddenText.classList.remove("hidden")
	hiddenText.classList.toggle("hidden")
})
