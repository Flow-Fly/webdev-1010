import React, { useState } from "react"
import LifeCycleCounter from "../components/LifeCycleCounter"
const Home = () => {
	const [showCounter, setShowCounter] = useState(false)

	return (
		<>
			<h1>Welcome to the Rick and Morty frontend</h1>
			<button onClick={() => setShowCounter(!showCounter)}>
				{showCounter ? "Hide" : "Show"} Counter
			</button>
			{showCounter && <LifeCycleCounter />}
			<p>
				{showCounter
					? "The counter component has been mounted!"
					: "The counter component is not mounted."}
			</p>
		</>
	)
}

export default Home
