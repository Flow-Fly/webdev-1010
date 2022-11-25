import "./App.css"
import { useState, useEffect } from "react"
// import Counter from "./components/Counter"
import TodosList from "./components/TodosList/TodosList"
import TodoForm from "./components/TodoForm/TodoForm"
import axios from "axios"
function App() {
	const [todos, setTodos] = useState([])
	const [searchString, setSearchString] = useState("")

	async function fetchTodos() {
		try {
			const { data } = await axios.get("http://localhost:5005/api/todos")
			setTodos(data)
		} catch (error) {
			console.log | error
		}
	}

	useEffect(() => {
		fetchTodos()
	}, [])

	// useEffect(fetchTodos, [])

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

	if (!todos) {
		return <div className="loading">Loading...</div>
	}

	const displayedTodos = todos.filter((todo) => {
		return todo.content.includes(searchString)
	})

	const removeTodo = (id) => {
		axios.delete("http://localhost:5005/api/todos/" + id)
		// const remainingTodos = todos.filter((todo) => todo.id !== id)
		// setTodos(remainingTodos)
	}
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
