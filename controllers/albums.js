const Album = require("../models/album");
const { post } = require("../routes");

module.exports = {
  index,
  show,
  new: newAlbum,
  create
};

function index(req, res) {
  Album.find({}, function (err, albums) {
    res.render("albums/index", { title: "Albums", albums });
  });
}

function show(req, res) {
  Album.findById(req.params.id, function (err, album) {
    res.render("albums/show", { title: "Album Detail", album });
  });
}

function newAlbum(req, res) {
  res.redirect("albums/show", { title: "Add Album" });
}

function create(req, res) {
const album = new Album(req.body);
  album.save(function (err) {
 // one way to handle errors
if (err) return res.redirect("/albums");
  res.redirect("/albums");
});
 }