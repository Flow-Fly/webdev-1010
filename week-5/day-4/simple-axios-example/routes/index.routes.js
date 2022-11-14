const express = require('express');
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/image", (req, res, next) => {
  res.json({ image: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" });
});

router.post("/message", (req, res, next) => {
  console.log(req.body);
  res.json({ msg: "all good" });

});
module.exports = router;
