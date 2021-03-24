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
};

module.exports = UserController;
