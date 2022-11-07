require("./config/mongo")

const express = require("express")
const hbs = require("hbs")
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(__dirname + "/public"))
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

app.use((req, res, next) => {
	console.log(req.body)
	next()
})
try {
	app.use("/", require("./routes/index.route"))
} catch (error) {
	console.log(error)
}

app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`)
)
