/**
 * Variable declarations
 */
const createForm = document.getElementById("create-form")
const fetchPhoneButton = document.getElementById("fetch-phone")
const listPhones = document.getElementById("phones-list")
const editForm = document.getElementById("edit-form")
const editName = document.getElementById("edit-name")
const editPrice = document.getElementById("edit-price")

async function doStuff() {
	const rawResponse = await fetch("https://api.chucknorris.io/jokes/random")
	const actualResponse = await rawResponse.json()

	const { data } = await axios.get("https://api.chucknorris.io/jokes/random")
}
/**
 * Event listeners
 */
createForm.addEventListener("submit", handleCreate)
editForm.addEventListener("submit", handleEdit)
fetchPhoneButton.addEventListener("click", fetchPhones)

async function handleCreate(event) {
	// preventDefault() allow us to not send the information directly to the server
	// Instead we will send an AJAX request that will do the job for us :)
	event.preventDefault()
	const name = createForm.querySelector("input[name='name']").value
	const price = createForm.querySelector("input[name='price']").value

	const phone = { name, price }

	const newlyCreatedPhone = await axios.post(
		"http://localhost:3000/phone",
		phone
	)
	console.log(newlyCreatedPhone)
	await fetchPhones()
}

async function handleEdit(event) {
	event.preventDefault()
	const name = editName.value
	const price = editPrice.value
	const id = editForm.dataset.id
	const phone = { name: name, price: price }
	console.log(id)
	const url = `http://localhost:3000/phone/${id}`
	try {
		// const updatedPhone = await axios({
		// 	method: "PATCH",
		// 	baseURL: url,
		// 	data: phone,
		// })
		const { data } = await axios.patch(url, phone)

		await axios({
			method: "PATCH",
		})

		console.log(data)
		await fetchPhones()
	} catch (error) {
		console.log(error)
	}
}

async function fetchPhones() {
	const { data } = await axios.get("http://localhost:3000/phone")
	listPhones.innerHTML = ""
	data.forEach((phone) => {
		const li = document.createElement("li")
		li.innerHTML = `<span class="name">${phone.name}</span> cost 
    $<span class="price">${phone.price}</span> 
    <span class="edit"><i data-id="${phone._id}" class="fa-solid fa-pen-to-square"></i></span>  
    <span class="delete"><i class="fa-solid fa-trash"></i></span>`
		// We might need the id later on (To update or delete !)
		// Storing it inside of a dataset.
		li.dataset.id = phone._id
		const edit = li.querySelector("span.edit")
		edit.addEventListener("click", addEditDataToForm)

		const deleteButton = li.querySelector(".delete")
		deleteButton.addEventListener("click", handleDelete)
		listPhones.append(li)
	})
}

function addEditDataToForm({ target }) {
	const li = target.closest("li")
	const name = li.querySelector(".name")
	const price = li.querySelector(".price")
	editName.value = name.textContent
	editPrice.value = price.textContent
	editForm.dataset.id = li.dataset.id
}

async function handleDelete({ target }) {
	const li = target.closest("li")
	const id = li.dataset.id
	await axios.delete(`http://localhost:3000/phone/${id}`)
	await fetchPhones()
}
