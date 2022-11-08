const router = require("express").Router()
const User = require("./../models/User.model")

router.get("/", async (req, res, next) => {
	try {
		const allUsers = await User.find().populate("pets")

		res.render("usersList", { allUsers })
	} catch (error) {
		next(error)
	}
})

module.exports = router
