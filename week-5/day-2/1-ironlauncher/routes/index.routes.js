const express = require("express")
const router = express.Router()

/* GET home page */
router.get("/", (req, res, next) => {
	res.render("index")
})

/**
 * All of the other routes should go down here
 */

router.use("/users", require("./users.route.js"))
router.use("/pets", require("./pets.route.js"))

module.exports = router
