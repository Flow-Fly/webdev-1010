var express = require("express")
var router = express.Router()
const uploader = require("./../config/cloudinary")
const filesModel = require("./../models/Files")

// console.log("uploader ? ", uploader);

/* GET users listing. */
router.get("/", async (req, res, next) => {
	try {
		res.render("index", { files: await filesModel.find() })
	} catch (err) {
		next(err)
	}
})

// picture reprensents the file input's name in the form view

router.post(
	"/upload-image",
	uploader.single("picture"),
	async (req, res, next) => {
		// an object returned by multer/cloudinary containing usefull infos related to the uploaded file.
		console.log(req.file)
		try {
			await filesModel.create({
				name: req.file.originalname,
				URL: req.file.path,
			})
			res.redirect("/")
		} catch (err) {
			next(err)
		}
	}
)

module.exports = router
