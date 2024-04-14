const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
//mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connect to mongodb 👍"))
  .catch((err) => console.log(err));

//schema

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//user model
const userModel = mongoose.model("user", userSchema);
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser
        .save()
        .then((savedUser) => {
          console.log("User saved successfully", savedUser);
        })
        .catch((error) => {
          console.error("Error saving user:", error);
        });
      res.send({ message: "Successfully signed up", alert: true });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});

//login api

app.post("/login", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log("Server is running at port :" + port));
