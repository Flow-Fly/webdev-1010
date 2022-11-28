import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import service from "../api/ApiHandler"
import useForm from "../hooks/useForm"

const CreateForm = () => {
	const navigate = useNavigate()
	const [formData, setFormData, resetForm] = useForm({
		name: "",
		eyes: 0,
		favoriteLanguage: "",
		finishTheLabs: false,
		number: 0,
		street: "",
		picture: {},
	})

	const handleSubmit = async (e) => {
		e.preventDefault()
		const fd = new FormData()
		// console.log(picture)
		fd.append("name", formData.name)
		fd.append("eyes", formData.eyes)
		fd.append("favoriteLanguage", formData.favoriteLanguage)
		fd.append("finishTheLabs", formData.finishTheLabs === "true" ? true : false)
		fd.append("number", formData.number)
		fd.append("street", formData.street)
		fd.append("picture", formData.picture)

		const { data } = await service.post("/students", fd)
		console.log(data)
		resetForm()
		navigate("/students/" + data._id)
	}

	const { name, eyes, favoriteLanguage, finishTheLabs, number, street } =
		formData
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name:</label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={setFormData}
				/>
			</div>
			<div>
				<label htmlFor="eyes">Eyes:</label>
				<input
					type="number"
					id="eyes"
					name="eyes"
					value={eyes}
					onChange={setFormData}
				/>
			</div>
			<div>
				<label htmlFor="favoriteLanguage">Favorite Language:</label>
				<select
					id="favoriteLanguage"
					name="favoriteLanguage"
					value={favoriteLanguage}
					onChange={setFormData}>
					<option disabled value="">
						Select a language
					</option>
					<option value="JavaScript">JavaScript</option>
					<option value="C">C</option>
					<option value="Python">Python</option>
					<option value="Rust">Rust</option>
					<option value="Haskell">Haskell</option>
				</select>
			</div>
			<fieldset style={{ border: "2px solid white" }}>
				<legend>Finish the labs?</legend>
				<div>
					<label htmlFor="yes">Yes: </label>
					<input
						type="radio"
						name="finishTheLabs"
						id="yes"
						value={true}
						checked={finishTheLabs === "true" ? true : false}
						onChange={setFormData}
					/>
				</div>
				<div>
					<label htmlFor="no">No: </label>
					<input
						id="no"
						type="radio"
						name="finishTheLabs"
						value={false}
						checked={finishTheLabs === "false" ? true : false}
						onChange={setFormData}
					/>
				</div>
			</fieldset>
			<div>
				<label htmlFor="number">Street Number: </label>
				<input
					type="number"
					value={number}
					name="number"
					id="number"
					onChange={setFormData}
				/>
			</div>
			<div>
				<label htmlFor="street">Street: </label>
				<input
					type="text"
					value={street}
					name="street"
					id="street"
					onChange={setFormData}
				/>
			</div>

			<div>
				<label htmlFor="picture">Picture</label>
				<input
					type="file"
					id="picture"
					name="picture"
					// value={picture.name || ""}
					onChange={setFormData}
				/>
			</div>

			<button>Submit</button>
		</form>
	)
}

export default CreateForm
