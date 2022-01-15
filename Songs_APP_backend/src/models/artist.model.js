const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  artist_name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  //Songs: { type: Number, required: true },
});

const Artist = mongoose.model("artist", artistSchema);

module.exports = Artist;
