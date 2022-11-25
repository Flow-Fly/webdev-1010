const app = require("../app")

const router = require("express").Router()

router.use("/", require("./todos.routes"))

router.get("/", (req, res, next) => {
	res.json({ message: "All good in here" })
})

module.exports = router
