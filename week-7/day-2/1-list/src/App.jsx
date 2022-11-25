import "./App.css"
import { useState } from "react"
import List from "./components/List/List"
import Counter from "./components/Counter/OtherCounter"

function App() {
	const [showPokemon, setShowPokemon] = useState(false)
	const [showCounter, setShowCounter] = useState(false)

	return (
		<div className="App">
			<button onClick={() => setShowPokemon(!showPokemon)}>
				{showPokemon ? "Hide" : "Show"} Pokemon
			</button>
			{showPokemon ? <List /> : <div>Nothing to show</div>}
			<button onClick={() => setShowCounter(!showCounter)}>Show Counter</button>
			{/* showCounter is a Bool, if it's true we will render the component, if not, nothing will be rendered */}
			{showCounter && <Counter />}
		</div>
	)
}

export default App
