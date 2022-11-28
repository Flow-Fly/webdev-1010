const { Schema, model } = require("mongoose")

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
	{
		name: String,
		eyes: Number,
		favoriteLanguage: {
			type: String,
			enum: ["JavaScript", "Rust", "C", "Haskell"],
		},
		finishTheLabs: Boolean,
		number: Number,
		street: String,
		picture: String,
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const Student = model("User", userSchema)

module.exports = Student
