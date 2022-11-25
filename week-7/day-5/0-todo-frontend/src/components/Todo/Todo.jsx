import React from "react"

const Todo = ({ todo, removeTodo }) => {
	return (
		<div
			className="Todo"
			style={{
				background: todo.urgent ? "red" : "yellow",
				color: todo.urgent ? "white" : "black",
			}}>
			<p>{todo.content}</p>
			<button onClick={() => removeTodo(todo._id)}>Delete</button>
		</div>
	)
}

export default Todo
