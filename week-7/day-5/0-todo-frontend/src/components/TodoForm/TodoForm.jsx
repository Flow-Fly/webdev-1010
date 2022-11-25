import React, { useState, useRef } from "react"

import axios from "axios"

const TodoForm = ({ setTodos }) => {
	const [content, setContent] = useState("")
	const [urgency, setUrgent] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")
	// const contentRef = useRef()
	// const urgencyRef = useRef()

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (!content) {
			setErrorMessage("You need some content in your todo!")
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
		}
		try {
			const { data } = await axios.post("http://localhost:5005/api/todos", {
				content,
				urgent: urgency,
			})
			console.log(data)
			setTodos((currentState) => [...currentState, data])
		} catch (error) {
			console.error(error)
		}

		setContent("")
		setUrgent(false)
	}

	const handleContentChange = ({ target: { value } }) => {
		setContent(value)
	}
	const handleUrgencyChange = (event) => {
		setUrgent(event.target.checked)
	}

	// console.log("Rerender!")
	// console.log(content)
	// return (
	// 	<form onSubmit={handleSubmit}>
	// 		<div>
	// 			<label htmlFor="content">Content:</label>
	// 			<input type="text" id="content" ref={contentRef} />
	// 		</div>
	// 		<div>
	// 			<label htmlFor="urgency">Urgent:</label>
	// 			<input type="checkbox" id="urgency" ref={urgencyRef} />
	// 		</div>

	// 		<button>Create a note</button>
	// 	</form>
	// )
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="content">Content:</label>
				<input
					type="text"
					id="content"
					value={content}
					onChange={handleContentChange}
				/>
			</div>
			<div>
				<label htmlFor="urgency">Urgent:</label>
				<input
					type="checkbox"
					id="urgency"
					checked={urgency}
					onChange={handleUrgencyChange}
				/>
			</div>

			{errorMessage && <p className="error">{errorMessage}</p>}

			<button>Create a note</button>
		</form>
	)
}

export default TodoForm
