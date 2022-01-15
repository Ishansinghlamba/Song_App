const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  album_name: { type: String, required: true },
  Genre: { type: String, required: true },
  Year: { type: Number, required: true },
  NoOfSongs: { type: Number, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "artist",
    required: true,
  },
  Songs: { type: mongoose.Schema.Types.ObjectId, ref: "song", required: true },
  Pic: { type: String, required: true },
});

const Album = mongoose.model("album", albumSchema);

module.exports = Album;
