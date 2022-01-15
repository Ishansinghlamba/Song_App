const express = require("express");
const router = express.Router();

const Artist = require("../models/artist.model");

router.post("/", async (req, res) => {
  const Artists = await Artist.create(req.body);
  return res.status(201).send(req.body);
});
router.get("/", async (req, res) => {
  const yo = await Artist.find().lean().exec();
  return res.send(yo);
});
module.exports = router;
