const router = require("express").Router()

router.use("/rubberducks", require("./rubberduck.route"))

router.get("/", (req, res) => {
	res.render("home")
})

module.exports = router
