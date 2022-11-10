const express = require("express")
const router = express.Router()
const Phone = require("./../models/Phone.model")

/* GET home page */
router.get("/", (req, res, next) => {
	res.render("index")
})

router.get("/phone", async (req, res, next) => {
	const allPhones = await Phone.find()
	res.json(allPhones)
})

router.post("/phone", async (req, res, next) => {
	const { name, price } = req.body

	if (!name || !price) {
	}

	try {
		const newPhone = await Phone.create({ name, price })

		res.json(newPhone)
	} catch (error) {
		next(error)
	}
})

router.patch("/phone/:id", async (req, res, next) => {
	try {
		const { id } = req.params

		// let { name, price } = req.body
		// price = Number(price)

		// console.log(id, req.body)

		const updatedPhone = await Phone.findByIdAndUpdate(id, req.body, {
			new: true,
		})
		console.log(updatedPhone)
		res.json(updatedPhone)
	} catch (error) {
		next(error)
	}
})

router.use((req, res, next) => {
	console.log(req.params, req.originalUrl)
	next()
})

router.delete("/phone/:id", async (req, res, next) => {
	try {
		await Phone.findByIdAndDelete(req.params.id)

		res.json({ message: "Phone deleted successfuly" })
	} catch (error) {
		next(error)
	}
})

module.exports = router
