const router = require("express").Router()
const Pet = require("./../models/Pet.model")
/**
 * All pets related routes
 * !All routes prefixed with /pets
 */

router.get("/", async (req, res, next) => {
	try {
		const allPets = await Pet.find()
		res.render("petsList", { allPets })
	} catch (error) {
		next(error)
	}
})

router.get("/create", (req, res) => {
	res.render("createPet")
})

router.get("/:id", async (req, res, next) => {
	try {
		// res.send(req.params.id)
		const onePet = await Pet.findById(req.params.id)
		res.render("onePet", { onePet })
	} catch (error) {
		next(error)
	}
})

router.post("/", async (req, res, next) => {
	const { name, petType } = req.body
	try {
		await Pet.create({ name, petType })

		res.redirect("/pets")
	} catch (error) {
		next(error)
	}
})

router.get("/:id/delete", async (req, res, next) => {
	try {
		await Pet.findByIdAndDelete(req.params.id)
		res.redirect("/pets")
	} catch (error) {
		next(error)
	}
})

router.get("/:id/update", async (req, res, next) => {
	try {
		const myPet = await Pet.findById(req.params.id)

		res.render("updatePet", { myPet })
	} catch (error) {
		next(error)
	}
})

router.post("/:id/update", async (req, res, next) => {
	try {
		const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		})
		console.log(updatedPet)
		res.redirect("/pets")
	} catch (error) {
		next(error)
	}
})

module.exports = router
