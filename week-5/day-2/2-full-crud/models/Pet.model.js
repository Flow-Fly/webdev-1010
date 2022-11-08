const { Schema, model } = require("mongoose")

const petSchema = new Schema(
	{
		name: String,
		petType: {
			type: String,
			enum: ["cat", "bird", "dog"],
		},
	},
	{
		// this second object adds extra properties: `createdAt` and `updatedAt`
		timestamps: true,
	}
)

const Pet = model("Pet", petSchema)

module.exports = Pet
