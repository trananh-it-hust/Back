import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

//import routes
import registerRouter from "./routes/register.js";
import loginRouter from "./routes/login.js";
import infoUserRouter from "./routes/infoUser.js";
import employerRouter from "./routes/employer.js";
import postRouter from "./routes/post.js";
import checktoken from "./routes/checktoken.js";
//
import cloudinary from "./configs/cloudinary.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
//
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "BANK",
  allowedFormats: ["jpg", "png", "jpeg"],
  transformation: [{ width: 500, height: 500, crop: "limit" }],
});
const upload = multer({
  storage: storage,
});
//
const app = express();
const URI =
  "mongodb+srv://web73:web73@projet-final-web73.d4lbg0v.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URI);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/infouser", infoUserRouter);
app.use("/employer", employerRouter);
app.use("/token", checktoken);
app.use("/", postRouter);
//
app.post(
  "/upload",
  upload.fields([{ name: "img", maxCount: 1 }]),
  (req, res) => {
    const link_img = req.files["img"][0];
    res.send(link_img);
  }
);
//
app.listen(3001, () => {
  console.log("Server has been run on 3001!");
});
