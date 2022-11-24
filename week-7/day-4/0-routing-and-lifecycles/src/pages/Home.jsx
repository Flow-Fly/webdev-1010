import React, { useState } from "react"
import LifeCycleCounter from "../components/LifeCycleCounter"
const Home = () => {
	const [showCounter, setShowCounter] = useState(false)

	return (
		<>
			<h1>Home</h1>
			<button onClick={() => setShowCounter(!showCounter)}>
				{showCounter ? "Hide" : "Show"} Counter
			</button>
			{showCounter && <LifeCycleCounter />}
		</>
	)
}

export default Home
