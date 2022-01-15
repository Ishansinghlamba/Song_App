const mongoose = require("mongoose");
const connect = () => {
  console.log("connected");
  return mongoose.connect("mongodb://127.0.0.1:27017/song_assi");
};
module.exports = connect;
