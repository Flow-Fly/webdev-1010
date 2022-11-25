const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const todoSchema = new Schema(
	{
		content: String,
		urgent: Boolean,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const Todo = model("Todo", todoSchema)

module.exports = Todo
