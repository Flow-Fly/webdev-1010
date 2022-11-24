import React, { useState, useEffect } from "react"

const LifeCycleCounter = () => {
	const [count, setCount] = useState(0)
	const [name, setName] = useState("Counter")

	useEffect(() => {
		console.log("Component has been mounted.")
		const id = setInterval(() => {
			setCount((currentCount) => currentCount + 1)
			// console.log("Count is incremented :)")
		}, 1000)

		return () => clearInterval(id)
	}, [])

	// useEffect(() => {
	// 	console.log("I am being triggered every single time")
	// })

	useEffect(() => {
		console.log("count just changed")
	}, [count])

	// Don't do that :)
	// setInterval(() => {
	// 	setCount((currentCount) => currentCount + 1)
	// }, 1000)

	// Handleclick with a closure (Advanced JS concepts)
	// const handleClick = (instruction) => {
	// 	// When we click, the return function get executed
	// 	return () => {
	// 		instruction === "increment"
	// 			? setCount((cur) => cur + 1)
	// 			: setCount((cur) => cur - 1)
	// 	}
	// }

	return (
		<div>
			<h1>{count}</h1>
			<div onClick={() => setName(name + "!")}>
				{name}
				{/* The handleClick function is executed directly. */}
				{/* <button onClick={handleClick("increment")}> + </button>
				<button onClick={handleClick("decrement")}> - </button> */}
			</div>
		</div>
	)
}

export default LifeCycleCounter
