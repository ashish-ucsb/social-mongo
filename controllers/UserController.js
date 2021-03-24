const UserModel = require("../models/UserModel");

let UserController = {
  readAll: async (req, res) => {
    let users = await UserModel.find({ username: req.params.username });
    res.json(users);
  },
};

module.exports = UserController;
