import express from "express";

// middleware
import middlewares from "../middlewares/index.js";

// controller
import loginController from "../controllers/loginController.js";

const loginRouter = express.Router();

// Login routes

loginRouter.post("/", middlewares.login, loginController.postLogin);

loginRouter.get("/", loginController.getAllLogin);

loginRouter.get("/:id", loginController.getUserById);

export default loginRouter;
