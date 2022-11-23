import React from "react"
import Todo from "../Todo/Todo"
const TodosList = ({ todos, removeTodo }) => {
	return (
		<>
			<div className="container">
				{todos.map((oopsie) => {
					return (
						<Todo key={oopsie.id} todo={oopsie} removeTodo={removeTodo} />

						// <li key={todo.id} onClick={() => removeTodo(todo.id)}>
						// 	{todo.content}
						// </li>
					)
				})}
			</div>
			{/* <h2>Other todo</h2>
			<ul>
				{todos.map((todo, i) => {
					return (
						<li key={i} onClick={() => removeTodo(todo.id)}>
							{todo.content}
						</li>
					)
				})}
			</ul> */}
		</>
	)
}

export default TodosList
