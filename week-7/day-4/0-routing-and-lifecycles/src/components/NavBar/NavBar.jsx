import React from "react"
import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
	return (
		<nav className="NavBar">
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/characters">Characters</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default NavBar
