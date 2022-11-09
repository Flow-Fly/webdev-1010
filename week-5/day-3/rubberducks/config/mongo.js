const mongoose = require("mongoose")
require("dotenv/config")

mongoose
	.connect(process.env.MONGO_URI)
	.then((db) => {
		console.log(`Connected to db ${db.connection.name}`)
	})
	.catch(console.log)
