const express = require("express");
const router = express.Router();

const Album = require("../models/album.model");

router.post("/", async (req, res) => {
  const Albumssss = await Album.create(req.body);
  return res.send("album");
});
router.get("/", async (req, res) => {
  const alb = await Album.find().lean().exec();
  return res.send(alb);
});

router.get("/:name", async (req, res) => {
  const album = await Album.findOne({
    album_name: req.params.name,
  })
    .populate("author")
    .populate("Songs")
    .lean()
    .exec();
  console.log(album);
  if (album) {
    return res.send(album);
  } else {
    return res.send("no");
  }
});
module.exports = router;
