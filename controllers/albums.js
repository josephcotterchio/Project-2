const Album = require("../models/album");

function album(req, res) {
  res.render('albums/album');
}

module.exports = {
  album,
};