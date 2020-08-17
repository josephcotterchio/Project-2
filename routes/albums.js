var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var albumsCtrl = require("../controllers/albums");  //
const Schema = mongoose.Schema;

const albumsSchema = new Schema ({
  name: String,
});

const songsSchema = new Schema({
  name: String,
  albums: [albumsSchema],
});

AlbumsModel = mongoose.model('Albums', albumsSchema);
SongsModel = mongoose.model('Songs', songsSchema);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/:num", function (req, res) {
  res.send("Hey, you selected album #" + req.params.num)
})

module.exports = router;

