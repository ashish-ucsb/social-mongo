const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  desc: { type: String, required: true },
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
