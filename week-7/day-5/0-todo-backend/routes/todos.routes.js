const router = require("express").Router()
const Todo = require("./../models/Todo.model")

router.get("/todos", async (req, res, next) => {
	// res.status(200).json(await Todo.find())
	try {
		const allTodos = await Todo.find()
		res.status(200).json(allTodos)
	} catch (error) {
		next(error)
	}
})

router.delete("/todos/:id", async (req, res, next) => {
	try {
		await Todo.findByIdAndDelete(req.params.id)
		res.status(204).json({ message: "Deleted!" + req.params.id })
	} catch (error) {
		next(error)
	}
})

router.post("/todos", async (req, res, next) => {
	const { content, urgent } = req.body

	console.log(content, urgent)

	// res.status(200).json({ content, urgent })
	// return

	const newTodo = await Todo.create({ content, urgent })

	res.status(201).json(newTodo)
})

module.exports = router
