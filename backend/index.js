import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

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




// __dirname workaround for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static frontend
const buildPath = path.join(__dirname, '../frontend/build');
app.use(express.static(buildPath));

// Fallback to React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "Email id is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      const savedUser = await newUser.save();
      console.log(savedUser);
      res.send({ message: "Successfully signed up", savedUser, alert: true });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});
//login api
app.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      const dataSend = {
        _id: existingUser._id,
        firstName: existingUser.firstName,
        lastName: existingUser.lastName,
        email: existingUser.email,
        image: existingUser.image,
      };
      res.send({
        message: "Login is successfully!",
        alert: true,
        data: dataSend,
      });
      console.log(dataSend);
    } else {
      res.send({
        message: "Email is not available, please sign up",
        alert: false,
      });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).send({ message: "Internal server error" });
  }
});
//product section
const SchemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", SchemaProduct);
//save product in data
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Upload Successfully" });
});
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server is running at port :" + port));
