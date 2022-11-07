const { model, Schema } = require("mongoose")

const rubberduckSchema = new Schema({
	name: String,
	color: String,
	material: {
		type: String,
		enum: ["plastic", "gold", "metal", "rubber", "wood", "diamond"],
	},
	age: Number,
	picture: String,
})

const Rubberduck = model("Rubberduck", rubberduckSchema)

// const hello = "Good morning!"

// module.exports = {Rubberduck, hello}

module.exports = Rubberduck
