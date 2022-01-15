const mongoose = require("mongoose");

const songsSchema = new mongoose.Schema({
  song_name: [{ type: String, required: true }],
  //   duration_time: [{ type: String, required: true }],
});

const Song = mongoose.model("song", songsSchema);

module.exports = Song;
