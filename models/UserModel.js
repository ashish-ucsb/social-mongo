const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
