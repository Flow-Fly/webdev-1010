require("./config/mongo")

const express = require("express")
const session = require("express-session")
const MongoStore = require("connect-mongo")

const hbs = require("hbs")
const port = process.env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set("trust proxy", 1)

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		cookie: {
			maxAge: 1000 * 60 * 60,
		},
		store: MongoStore.create({
			mongoUrl: process.env.MONGO_URI,
		}),
	})
)

app.use(express.static(__dirname + "/public"))
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + "/views/partials")

// app.use((req, res, next) => {
// 	if (req.session.currentUser) {
// 		res.locals.isLoggedIn = true
// 		res.locals.currentUser = req.session.currentUser
// 	}
// 	next()
// })

const { exposeUserToView } = require("./middlewares/middlewares")

app.use(exposeUserToView)

try {
	app.use("/", require("./routes/index.route"))
} catch (error) {
	console.log(error)
}

app.use((err, req, res, next) => {
	console.log(err)
	res.render("error", { err })
})

app.listen(port, () =>
	console.log(`Server is running on http://localhost:${port}`)
)
