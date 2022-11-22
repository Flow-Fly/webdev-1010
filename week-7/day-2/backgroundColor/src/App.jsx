import { useState } from "react"
import "./App.css"

function App() {
	const [color, setColor] = useState("#FA1E56")

	const handleBackground = () => {
		setColor(
			`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
				Math.random() * 255
			})`
		)
	}

	return (
		<div className="App" style={{ backgroundColor: color }}>
			<button onClick={handleBackground}>Click meee</button>
		</div>
	)
}

export default App
