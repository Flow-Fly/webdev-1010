const router = require("express").Router()
const Rubberduck = require("./../models/Rubberduck.model")
const mongoose = require("mongoose")

/**
 * All of those routes are prefixed with
 * ! /rubberducks
 */

router.get("/", async (req, res) => {
	const allDucks = await Rubberduck.find()
	res.render("rubberduckList", { allDucks })
})

router.get("/search", async (req, res) => {
	const { material } = req.query
	const filteredDucks = await Rubberduck.find({ material })

	res.render("rubberduckList", { allDucks: filteredDucks })
})

router.get("/create", (req, res) => {
	res.render("createDuck")
})

// ObjectId validation using RegEx
// /:id([a-f0-9]{24})
router.get("/:id", async (req, res) => {
	const { id } = req.params

	if (mongoose.isValidObjectId(id)) {
		const myDuck = await Rubberduck.findById(id)

		res.render("oneDuck", { myDuck })
	} else {
		res.render("error", {
			errorMessage: "Not a valid id.",
		})
	}
})

router.post("/create", async (req, res) => {
	const { name, color, material, age, picture } = req.body

	const newDuck = await Rubberduck.create({
		name,
		color,
		age,
		material,
		picture,
	})
	// res.render('oneDuck', {myDuck: newDuck})
	res.redirect(`/rubberducks/${newDuck._id}`)
})

module.exports = router
