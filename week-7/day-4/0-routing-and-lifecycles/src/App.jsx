import "./App.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import ListCharacters from "./pages/ListCharacters"
import OneCharacter from "./pages/OneCharacter"
import AddCharacter from "./pages/AddCharacter"
import NotFound from "./pages/NotFound"
import Layout from "./components/Layout"
import NavBar from "./components/NavBar"
/**
 * - npm i react-router-dom
 * - Configuring the router
 * - Defining Routes
 * - Handling navigation with Link
 * - Advanced Routes:
 *  - Dynamic Routing and params
 *  - Routing priority
 *  - Not Found Route
 *  - Nested Routes
 *  - Shared Layout(s) and Outlet
 * - Link and NavLink
 * - Manual navigation with Navigate and useNavigate
 * - Search params (aka Query Strings)
 *
 */

function App() {
	return (
		<div className="App">
			{/* We can have multiple routes */}
			{/* <Routes>
				<Route path="/characters" element={<ListCharacters />} />
			</Routes> */}

			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Layout />}>
					<Route index element={<ListCharacters />} />
					<Route path=":id" element={<OneCharacter />} />
					<Route path="new" element={<AddCharacter />} />
				</Route>

				{/* Non nested routes */}
				{/* <Route path="/characters" element={<ListCharacters />} />
				<Route path="/characters/:id" element={<OneCharacter />} />
				<Route path="/characters/new" element={<AddCharacter />} /> */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
