const express = require("express");
const app = express();
app.use(express.json());
const connect = require("./configs/db");
const Aristcontroller = require("./controllers/artist.controller");
const SongsController = require("./controllers/song.controller");
const AlbumController = require("./controllers/album.controller");
app.use("/artists", Aristcontroller);
app.use("/songs", SongsController);
app.use("/albums", AlbumController);

app.listen(4003, async () => {
  await connect();
  console.log("listening on port 4003");
});
