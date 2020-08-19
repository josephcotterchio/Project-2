var Album = require("../models/album");
const { post } = require("../routes");

module.exports = {
  create,
  addReview,
  deleteReview,
};

function create(req, res) {
  Album.findById(req.params.id, function (err, album) {
    album.reviews.push(req.body);
    album.save(function (err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}

function addReview(req, res) {
  Album.findById(req.params.id, function (err, album) {
    album.reviews.push(req.body);
    album.save(function (err) {
      res.redirect(`/albums/${album._id}`);
    });
  });
}
function deleteReview(req, res) {
  Album.findById(req.params.albumId, function (err, album) {
    if (err) return console.log("error")
    album.reviews.id(req.params.reviewId).remove();
    album.save(function (err) {
    res.redirect(`/albums/${album._id}`);
    })
  });
}


