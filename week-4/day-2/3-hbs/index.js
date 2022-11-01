const express = require("express")
const hbs = require("hbs")

const app = express()

app.use(express.static(__dirname + "/public"))
// app.set("views", __dirname + "/pages")

app.set("view engine", "hbs")

app.get("/", (req, res) => {
	res.render("main", {
		title: "Main page",
		style: ["main.css"],
	})
})

app.get("/about", (req, res) => {
	res.render("about", {
		title: "About page",
		style: ["about.css", "font-style.css"],
	})
})

app.listen(3000, () => console.log(`Server 🏃‍♂️ on http://localhost:3000`))
