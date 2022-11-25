import React from "react"

const Controller = ({ setCounter }) => {
	const handleIncrement = () => {
		setCounter((currentState) => currentState + 1)
	}
	const handleDecrement = () => {
		setCounter((currentState) => currentState - 1)
	}
	return (
		<div>
			<button onClick={handleDecrement}> - </button>
			<button onClick={handleIncrement}> + </button>
		</div>
	)
}

export default Controller
