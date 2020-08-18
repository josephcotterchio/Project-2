var Album = require("../models/album");

module.exports = {
  create,
  //deleteReview
};

function create(req, res) {
  Album.findById(req.params.id, function (err, album) {
    album.reviews.push(req.body);
    album.save(function (err) {
      res.redirect(`/albums/${movie._id}`);
    });
  });
}
// function deleteReview(req, res) {
//   Review.findByIdAndRemove(req.params.id, function (err, review) {
//     if (err) return res.redirect("/albums");
//   });
//   res.redirect("/albums");
// }