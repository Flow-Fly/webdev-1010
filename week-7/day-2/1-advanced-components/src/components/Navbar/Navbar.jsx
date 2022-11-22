import React from "react"
import "./Navbar.css"

const Navbar = ({ Card }) => {
	/**
	 * The CSS is not scoped in React, to avoid leaking to some other Element
	 * one of the solution is to give the same className to our component as it's name, this way we can prevent leaking.
	 *
	 * You can aswell explore css modules which allow you to scope css.
	 * https://css-tricks.com/css-modules-part-1-need
	 *
	 */
	return (
		<nav className="Navbar">
			<ul>
				<li>Home</li>
				<li>Stuff</li>
				<li>
					<Card name="Toto" />
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
