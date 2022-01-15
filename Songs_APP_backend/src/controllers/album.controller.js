const express = require("express");
const router = express.Router();

const Album = require("../models/album.model");

router.post("/", async (req, res) => {
  const Albumssss = await Album.create(req.body);
  return res.send("album");
});
router.get("/", async (req, res) => {
  const page = +req.query.page || 1;
  const size = +req.query.size || 1;
  const offset = (page - 1) * size;
  const album = await Album.find().skip(offset).limit(size).lean().exec();

  const total = await Album.find().countDocuments();
  const totalpages = Math.ceil(total / size);
  return res.send({ album, totalpages });
});

router.get("/:id", async (req, res) => {
  const album = await Album.findById(req.params.id)
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
router.get("/search/:name", async (req, res) => {
  const album = await Album.find({ album_name: req.params.name });
  return res.send(album);
});
module.exports = router;
