var express = require("express");
var router = express.Router();
var reviewsCtrl = require("../controllers/reviews");

//router.post("/albums/:id/", reviewsCtrl.create);
router.post("/:id", reviewsCtrl.addReview);
router.post("/:id", reviewsCtrl.deleteReview);
router.delete("/:albumId/:reviewId", reviewsCtrl.deleteReview);

module.exports = router;
