const express = require("express")
const router = express.Router()

/* GET home page */
router.get("/", (req, res, next) => {
	res.render("index")
})

router.use("/pets", require("./pets.routes.js"))
router.use("/users", require("./users.routes.js"))

module.exports = router
