import React, { useState, useRef } from "react"

const TodoForm = ({ setTodos }) => {
	const [content, setContent] = useState("")
	const [urgency, setUrgent] = useState(false)
	// const contentRef = useRef()
	// const urgencyRef = useRef()

	const handleSubmit = (event) => {
		event.preventDefault()
		// console.log(
		// 	"In the submit",
		// 	contentRef.current.value,
		// 	urgencyRef.current.checked
		// )
		// const newTodo = {
		// 	content,
		// 	urgent: urgency,
		// }

		setTodos((currentState) => {
			const copy = [...currentState]
			copy.push({ content, urgent: urgency, id: currentState.length + 1 })
			return copy
			// return [
			// 	...currentState,
			// 	{ content, urgent: urgency, id: currentState.length + 1 },
			// ]
		})
		setContent("")
		setUrgent(false)

		/**
		 * Need to create a todo which include :
		 * -content
		 * -id
		 * -urgent
		 */
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

			<button>Create a note</button>
		</form>
	)
}

export default TodoForm
