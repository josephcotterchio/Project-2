const Album = require("../models/album");

function index(req, res) {
  Album.find({}, function (err, albums) {
    res.render('movies/index', { title: 'All Albums', albums });
  });
}

function show(req, res) {
  Album.findById(req.params.id, function (err, album) {
    res.render('albums/show', { title: 'Album Detail', album });
  });
}

function newAlbum(req, res) {
  res.render('albums/new', { title: 'Add Album' });
}

  const album = new Album(req, res);
  album.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect('/albums/new');
    console.log(album);
    // for now, redirect right back to new.ejs
    res.redirect('/albums');
  });

module.exports = {
  index,
  show,
  new: newAlbum
};