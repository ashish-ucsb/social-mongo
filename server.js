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

app.post("/users", UserController.create);
app.get("/users", UserController.readAll);
app.get("/users/:username", UserController.read);

const port = 5000;
app.listen(port, () => {
  console.log(`live at http://localhost:${port}`);
});
