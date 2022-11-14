# env file

Don't forget to add your own .env file with the following filed infos =>

- PORT = 3000
- CLOUDINARY_NAME = ????
- CLOUDINARY_KEY = ????
- CLOUDINARY_SECRET = ????
- MONGO_URI= ????

## Steps

- Install `cloudinary`, `multer-storage-cloudinary`, `multer`
- add your configuration file for cloudinary:

```js
// config/cloudinary.config.js

const cloudinary = require("cloudinary").v2
const { CloudinaryStorage } = require("multer-storage-cloudinary")
const multer = require("multer")

// connecting to your cloudinary account with the provided credentials
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
})
// cloudinary: SAAS platform specialized in image hosting
const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		allowed_formats: ["jpg", "jpeg", "png", "gif"],
		folder: "squad-1010", // The name of the folder in cloudinary
		// resource_type: 'raw' => this is in case you want to upload other type of files, not just images
	},
})

// multer is really responsible to manage the incoming file (from the client)
// designed to parse file from the request and associate it to req.file / req.files
module.exports = multer({ storage })
```

- Create a form which allow you to upload files

```HTML
<form method='post' action="/something" enctype="multipart/form-data">
  <input type="file" name="picture" />
  <button>Upload</button>
</form>
```

- Create a route that listen for `POST` request on the endpoint where the form send the informations and use the uploader middleware.
- require the uploader middleware
- Make sure that the name of the input and the name you pass to the middleware are the same.

```js
router.post(
	"/something",
	uploader.single("picture"),
	async (req, res, next) => {
		console.log(req.file)
	}
)
```
