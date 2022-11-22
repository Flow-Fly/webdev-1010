import { useState } from "react"

const Counter = () => {
	const [state, setState] = useState("Hello react")
	const [count, setCount] = useState(0)
	const [user, setUser] = useState({
		name: "Bob",
		address: {
			street: "street of React",
			number: 56,
		},
	})
	// console.log(state)
	// console.log(count)
	// Do not mutate the state!
	// ++count
	const handleIncrement = () => setCount(count + 1)
	const handleDecrement = () => setCount(count - 1)

	const handleUserClick = () => {
		const newUser = { ...user, address: { ...user.address } }
		newUser.address.number += 1
		console.log("Mutations!", user.address)

		setUser(newUser)
	}
	console.log("My user is: ", user)
	console.log("Rerender!")

	return (
		<>
			<div>
				User:
				<ul>
					<li>{user.name}</li>
					<li onClick={handleUserClick}>
						{user.address.number}, {user.address.street}
					</li>
				</ul>
			</div>
			<div onClick={() => setState(state + "!")}>{state}</div>
			<h2>
				I just clicked{" "}
				<span>
					{count} {count >= 2 ? "times" : "time"}
				</span>
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

export default Counter
