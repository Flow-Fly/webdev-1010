import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
	// Let's just add the Router Component and wrap the App
	<Router>
		<App />
	</Router>
)
