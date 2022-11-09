const router = require("express").Router()

router.use("/rubberducks", require("./rubberduck.route"))

router.use("/auth", require("./auth.routes"))

router.get("/", (req, res) => {
	res.render("home")
})

router.get("/profile", (req, res, next) => {
	console.log(req.session.currentUser)
	res.render("profile", { currentUser })
})

module.exports = router
