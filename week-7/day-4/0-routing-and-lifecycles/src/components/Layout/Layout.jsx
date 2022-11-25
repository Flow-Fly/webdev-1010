import React from "react"
import { Link, Outlet } from "react-router-dom"
import "./Layout.css"
const Layout = () => {
	return (
		<>
			<section className="Layout">
				<nav>
					<ul>
						<li>
							<Link to="/characters/1">Character 1</Link>
						</li>
						<li>
							<Link to="2">Character 2</Link>
						</li>
						<li>
							<Link to="new">Add a new character</Link>
						</li>
						<li>
							<a to="http://www.google.com">Click</a>
						</li>
					</ul>
				</nav>
				<Outlet />
			</section>
		</>
	)
}

export default Layout
