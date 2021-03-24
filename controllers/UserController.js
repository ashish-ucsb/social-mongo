const UserModel = require("../models/UserModel");

let UserController = {
  create: async (req, res) => {
    let newUser = new UserModel(req.body);
    let savedUser = await newUser.save();
    res.json(savedUser);
  },
  read: async (req, res) => {
    let user = await UserModel.findOne({ username: req.params.username });
    res.json(user);
  },
  readAll: async (req, res) => {
    let users = await UserModel.find({});
    res.json(users);
  },
  update: async (req, res) => {
    let updatedUser = await UserModel.findOneAndUpdate(
      { username: req.params.username },
      { $set: req.body }
    );
    res.json(updatedUser);
  },
  delete: async (req, res) => {
    let deletedUser = await UserModel.deleteOne({
      username: req.params.username,
    });
    res.json(deletedUser);
  },
};

module.exports = UserController;
