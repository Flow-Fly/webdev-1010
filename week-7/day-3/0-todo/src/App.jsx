import "./App.css"
import { useState } from "react"
// import Counter from "./components/Counter"
import TodosList from "./components/TodosList/TodosList"
import TodoForm from "./components/TodoForm/TodoForm"
const originalTodo = [
	{
		id: 0,
		content: "Learn React",
		urgent: true,
	},
	{
		id: 1,
		content: "Do some skiing",
		urgent: false,
	},
]

function App() {
	const [todos, setTodos] = useState(originalTodo)
	const [searchString, setSearchString] = useState("")

	const removeTodo = (id) => {
		const remainingTodos = todos.filter((todo) => todo.id !== id)
		setTodos(remainingTodos)
	}

	const handleSearch = (e) => {
		setSearchString(e.target.value)
		/**
		 * This is bad. 🔴
		 * We are modifying the state and therefore loosing some informations from my todos
		 * we don't want to modify the state when searching for something
		 * We want to axctually have a temporary variable which is going to filter through my state
		 */
		// setTodos(todos.filter((todo) => todo.content.includes(e.target.value)))
	}
	const displayedTodos = todos.filter((todo) => {
		return todo.content.includes(searchString)
	})

	console.log(displayedTodos)

	return (
		<div className="App">
			<input
				type="search"
				placeholder="Search for a todo"
				value={searchString}
				onChange={handleSearch}
			/>

			<TodoForm setTodos={setTodos} />
			<TodosList todos={displayedTodos} removeTodo={removeTodo} />
			{/* Uncomment to checkout the state lifting :)  */}
			{/* <Counter /> */}
		</div>
	)
}

export default App
