const express = require("express");
const router = express.Router();

const Song = require("../models/songs.model");

router.post("/", async (req, res) => {
  const songs = await Song.create(req.body);
  return res.send(req.body);
});
router.get("/", async (req, res) => {
  const songs = await Song.find().lean().exec();
  return res.send(songs);
});
module.exports = router;
