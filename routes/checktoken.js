import express from "express";
import { ObjectId } from "mongodb";
import UserModel from "../Models/user.js";
import { createAccessToken } from "../utils/index.js";
// middleware
import middlewares from "../middlewares/index.js";

// controller

const checktoken = express.Router();

//routes
checktoken.get("/", middlewares.checkToken, async (req, res) => {
  try {
    const _id = new ObjectId(req.user.id);
    const userLogin = await UserModel.findOne({ _id: req.user.id });
    if (!userLogin) {
      res.status(400).json({
        message: "User or password not right",
      });
      return;
    } else {
      const token = createAccessToken(userLogin);
      res.status(200).json({
        message: "User logged in successfully",
        data: userLogin,
        token,
      });
      return;
    }
  } catch (error) {
    res.status(500).json({
      message: "error.message",
    });
  }
  return;
});

export default checktoken;
