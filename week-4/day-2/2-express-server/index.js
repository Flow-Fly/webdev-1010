const express = require("express")

const app = express()

console.log(__dirname)

app.get("/about", (request, response) => {
	// response.send("<h1>Main !</h1>")
	response.sendFile(__dirname + "/views/about.html")
})
app.get("/", (req, res) => {
	// res.send("Hello again!")
	res.sendFile(__dirname + "/views/index.html")
})

app.get("*", (req, res) => {
	res.statusCode = 404
	res.sendFile(__dirname + "/views/error.html")
})

app.listen(3000, () =>
	console.log("Server is running on http://localhost:3000")
)
