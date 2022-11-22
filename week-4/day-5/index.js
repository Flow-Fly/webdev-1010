// import mongoose from "mongoose"

const mongoose = require("mongoose")

const model = mongoose.model
const Schema = mongoose.Schema

const students = [
	{
		name: "Bob",
		campus: "Paris",
		favoriteLanguage: ["JavaScript", "HTML"],
	},
	{
		name: "Alice",
		campus: "Barcelona",
		favoriteLanguage: ["JavaScript", "HTML", "CSS"],
	},
	{
		name: "John",
		campus: "Miami",
		favoriteLanguage: ["JavaScript", "Python"],
	},
]

const projectSchema = new Schema({
	module: Number,
	name: {
		type: String,
		match: /[A-Za-z]/,
	},
	description: {
		type: String,
		maxLength: 500,
		required: true,
	},
})

const addressSchema = new Schema({
	city: String,
	zipCode: Number,
})

const userSchema = new Schema({
	name: String,
	address: addressSchema,
})

const studentSchema = new Schema({
	name: {
		required: true,
		type: String,
		maxLength: 50,
		match: /[A-Za-z]/,
	},
	projects: {
		type: [Schema.Types.ObjectId],
		ref: "Project",
	},
	campus: {
		type: String,
		enum: ["Paris", "Madrid", "Miami", "Barcelona"],
	},
	favoriteLanguage: {
		type: [String],
		enum: ["JavaScript", "CSS", "HTML", "Python"],
	},
})

const Project = model("Project", projectSchema)
const Student = model("Student", studentSchema)

mongoose
	.connect("mongodb://localhost/Squads")
	.then(async (db) => {
		try {
			console.log(`Successfully connected to ${db.connection.name}`)
			await Project.deleteMany()
			await Student.deleteMany()

			/**
			 * Creating multiple entries
			 */
			const allStudents = await Student.create(students)

			// console.log(allStudents)
			/**
			 * Creating one entry
			 */
			const myFirstProject = await Project.create({
				module: 1,
				name: "AwesumProj",
				description: "Nicest project ever!",
			})

			/**
			 * Find someone with a regular Query
			 */
			// const bob = Student.findOne({$or :[{name: 'Bob' }, {name:'Alice'}]} )
			// const alice = await Student.findById()

			const alice = await Student.findOne({ name: "Alice" }, { name: 1 })
			// This will get every students from the db
			// const everyStudent = await Student.find()
			console.log(alice)

			/**
			 * Update a document
			 */

			const updatedBob = await Student.findOneAndUpdate(
				{ name: "Bob" },
				{ $push: { projects: myFirstProject._id } },
				{ new: true }
			)

			console.log(updatedBob)

			// await Student.findByIdAndDelete(alice._id)
			// await Student.findOneAndDelete({ _id: alice._id })
			// await Student.findOneAndDelete({name: 'Alice'})
			// console.log(returnValue)

			await mongoose.disconnect()
		} catch (error) {
			console.error(error)
		}
	})
	.catch((error) => console.error(error))
