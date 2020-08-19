const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const albumSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      albumArt: String,
    },
    releaseYear: {
      type: Number,
      default: function () {
        return new Date().getFullYear();
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Album", albumSchema);
