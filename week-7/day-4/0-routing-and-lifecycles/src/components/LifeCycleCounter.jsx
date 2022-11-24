import React, { useState } from "react"

const LifeCycleCounter = () => {
	const [count, setCount] = useState(0)

	// Handleclick with a closure (Advanced JS concepts)
	const handleClick = (instruction) => {
		// When we click, the return function get executed
		return () => {
			instruction === "increment"
				? setCount((cur) => cur + 1)
				: setCount((cur) => cur - 1)
		}
	}

	return (
		<div>
			<h1>{count}</h1>
			<div>
				{/* The handleClick function is executed directly. */}
				<button onClick={handleClick("increment")}> - </button>
				<button onClick={handleClick("decrement")}> + </button>
			</div>
		</div>
	)
}

export default LifeCycleCounter
