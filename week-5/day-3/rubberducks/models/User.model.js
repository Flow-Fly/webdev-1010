const { Schema, model } = require("mongoose")

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: [true, "The username is required!"],
			unique: [true, "This username is already taken"],
		},
		password: String,
	},
	{
		timestamps: true,
	}
)

const User = model("User", userSchema)

module.exports = User
