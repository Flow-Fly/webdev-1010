import "./App.css"
import { useState } from "react"
import Counter from "./components/Counter/Counter"
import OtherCounter from "./components/Counter/OtherCounter"

function App() {
	// const [state, setState] = useState("Hello react")
	// const [count, setCount] = useState(0)
	// // console.log(state)
	// // console.log(count)
	// // Do not mutate the state!
	// // ++count
	// const handleIncrement = () => setCount(count + 1)
	// const handleDecrement = () => setCount(count - 1)

	return (
		<div className="App">
			<Counter />

			<OtherCounter />
		</div>
	)
}

export default App
