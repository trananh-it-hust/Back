import UserModel from "../Models/user.js";
import jwt from "jsonwebtoken";
import { createAccessToken } from "../utils/index.js";

const loginController = {
  // Duyệt POST Login
  postLogin: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({
          message: "Please provide a username and password",
        });
        return;
      }
      const userLogin = await UserModel.findOne({ email, password });
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
        message: error.message,
      });
    }
  },
  // GET ALL Login
  getAllLogin: async (req, res) => {
    try {
      const AllUserLoginSuccess = await UserModel.find();
      res.status(200).json({
        message: "Users retrieved successfully",
        data: AllUserLoginSuccess,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  // Endpoint to fetch author by ID
  getUserById: async (req, res) => {
    const { id } = req.params;
    const { userName } = req.body;
    try {
      const author = await UserModel.findOne(
        {
          _id: id,
        },
        userName
      );
      res.status(200).json({
        message: "Users take id successfully",
        data: author,
      });
    } catch (error) {
      res.status(500).json({ error: "Error fetching author data" });
    }
  },
};
export default loginController;
