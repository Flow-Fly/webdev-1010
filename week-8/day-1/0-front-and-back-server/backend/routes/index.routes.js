const router = require("express").Router()
const uploader = require("./../config/cloudinary.config")
const Student = require("../models/User.model")
const { set } = require("mongoose")

router.get("/", (req, res, next) => {
	res.status(200).json("All good in here")
})

router.get("/students", async (req, res, next) => {
	res.status(200).json(await Student.find())
})

router.get("/students/:id", async (req, res, next) => {
	try {
		const oneStudent = await Student.findById(req.params.id)

		res.status(200).json(oneStudent)
	} catch (error) {
		next(error)
	}
})

router.post("/students", uploader.single("picture"), async (req, res, next) => {
	const { name, eyes, favoriteLanguage, finishTheLabs, number, street } =
		req.body

	let picture
	if (req.file) {
		picture = req.file.path
	}

	const student = await Student.create({
		name,
		eyes,
		favoriteLanguage,
		finishTheLabs,
		number,
		street,
		picture,
	})

	res.status(201).json(student)
})

module.exports = router
