import { useState, useEffect } from "react"
import service from "./api/ApiHandler"
import ListStudents from "./pages/ListStudents"
import CreateForm from "./pages/CreateForm"
import { NavLink, Routes, Route } from "react-router-dom"
import "./App.css"
import OneStudent from "./pages/OneStudent"

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li>
						<NavLink
							className={({ isActive }) => {
								return isActive ? "active-link" : "not-active"
							}}
							style={({ isActive }) => {
								return isActive ? { color: "red" } : {}
							}}
							to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/students">Students</NavLink>
					</li>
					<li>
						<NavLink to="/students/create">Create a student</NavLink>
					</li>
				</ul>
			</nav>
			<Routes>
				<Route path="/students" element={<ListStudents />} />
				<Route path="/students/:id" element={<OneStudent />} />
				<Route path="/students/create" element={<CreateForm />} />
			</Routes>
		</div>
	)
}

export default App
