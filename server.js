const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const dbName = "test";
mongoose.connect(
  `mongodb://localhost/${dbName}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to MongoDB!");
  }
);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const UserController = require("./controllers/UserController");
const PostController = require("./controllers/PostController");

app.post("/users", UserController.create);
app.get("/users", UserController.readAll);
app.get("/users/:username", UserController.read);
app.get("/users/:username/posts", UserController.readPosts);
app.put("/users/:username", UserController.update);
app.delete("/users/:username", UserController.delete);

app.post("/posts/:username", PostController.create);
app.get("/posts", PostController.readAll);
app.get("/posts/:id", PostController.read);
app.put("/posts/:id", PostController.update);

const port = 5000;
app.listen(port, () => {
  console.log(`live at http://localhost:${port}`);
});
