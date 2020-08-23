const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("index.ejs");
});

router.get("/new", function (req, res, next) {
  res.render("albums/show");
});

module.exports = router;
