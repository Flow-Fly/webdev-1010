const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/api", (req, res, next) => {
  try {
    res.json({ message: "Hello there!" });
  } catch (error) {
    console.log(error);
  }
})


app.listen(5005, () => { console.log("Listening on http://localhost:5005") });