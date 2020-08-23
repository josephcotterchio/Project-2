const express = require("express");
const router = express.Router();
const albumsCtrl = require("../controllers/albums");

router.get("/", albumsCtrl.index);
router.get("/new", albumsCtrl.new);
router.post("/", albumsCtrl.create);
router.get("/show", albumsCtrl.show);
router.get("/:id", albumsCtrl.show);


module.exports = router;
