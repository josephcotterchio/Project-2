var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var albumsCtrl = require("../controllers/albums");

router.get("/", albumsCtrl.index);
router.get("/new", albumsCtrl.new);
router.get("/:id", albumsCtrl.show);
router.post("/")

module.exports = router;
