const Album = require("../models/album");
const Song = require("../models/album");

function album(req, res) {
  res.render('albums/album');
}
function song(req, res) {
  res.render('albums/song');
}

module.exports = {
  album,
  song
};