const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");

let PostController = {
  create: async (req, res) => {
    let newPost = new PostModel(req.body);
    let savedPost = await newPost.save().then((post) => {
      UserModel.updateOne(
        { username: req.params.username },
        { $push: { posts: post._id } }
      ).then(res.json(post));
    });
  },
  read: async (req, res) => {
    let post = await PostModel.findOne({ _id: req.params.id });
    res.json(post);
  },
  readAll: async (req, res) => {
    let posts = await PostModel.find({});
    res.json(posts);
  },
  update: async (req, res) => {
    let updatedPost = await PostModel.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.json(updatedPost);
  },
  delete: async (req, res) => {
    let deletedPost = await PostModel.deleteOne({ _id: req.params.id });
    res.json(deletedPost);
  },
};

module.exports = PostController;
