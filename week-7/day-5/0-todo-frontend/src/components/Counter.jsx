import React, { useState } from "react"
import Ancient from "./Ancient"

const Counter = () => {
	const [count, setCounter] = useState(0)

	return (
		<div>
			<Ancient callback={setCounter} />
			<div>{count}</div>
		</div>
	)
}

export default Counter
