const Album = require("../models/album");

module.exports = {
  index,
  show,
  new: newAlbum,
  create,
};

function index(req, res) {
  Album.find({}, function (err, albums) {
    res.render("albums/index", { title: "All Albums", albums });
  });
}

function show(req, res) {
  Album.findById(req.params.id, function (err, album) {
    res.render("albums/show", { title: "Album Detail", album });
  });
}

function newAlbum(req, res) {
  res.render("albums/new", { title: "Add Album" });
}

function create(req, res) {
  const album = new Album(req.body);
  album.save(function (err) {
    // one way to handle errors
    if (err) return res.redirect("/albums/new");
    console.log(album);
    // for now, redirect right back to new.ejs
    res.redirect("/albums");
  });
}