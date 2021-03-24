const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// MongoDb Connection
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

// Middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const UserController = require("./controllers/UserController");

app.get("/users", UserController.readAll);

// Serve
const port = 5000;
app.listen(port, () => {
  console.log(`live at http://localhost:${port}`);
});
