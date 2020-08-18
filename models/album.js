var mongoose = require("mongoose");

// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    rating: { type: Number, min: 1, max: 5, default: 5 },
  },
  {
    timestamps: true,
  }
);

const albumSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Album', albumSchema);
