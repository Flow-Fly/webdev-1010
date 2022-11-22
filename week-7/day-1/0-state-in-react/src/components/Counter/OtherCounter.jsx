import React, { useState } from "react"

const OtherCounter = () => {
	const [count, setCount] = useState(5)
	const handleIncrement = () => {
		// setCount(count + 1)
		// setCount(count + 1)

		setCount((currentState) => currentState + 1)

		setCount((currentState) => currentState + 1)
	}
	const handleDecrement = () => setCount(count - 1)

	return (
		<>
			<h2>
				I just clicked {count} {count >= 2 ? "times" : "time"}
			</h2>
			<div>
				{/* <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button> */}
				<button onClick={handleDecrement}> - </button>
				<button onClick={handleIncrement}> + </button>
			</div>
		</>
	)
}

export default OtherCounter
