import express from "express";

// middleware
import middlewares from "../middlewares/index.js";

// controller
import infoUserController from "../controllers/infoUserController.js";

const infoUserRouter = express.Router();

// infoUser Router

infoUserRouter.put("/", middlewares.infoUser, infoUserController.putInfoUser);

infoUserRouter.post("/", middlewares.infoUser, infoUserController.getInfoUser);
infoUserRouter.post("/option", infoUserController.getOptionUser);
infoUserRouter.put("/option", infoUserController.putOptionUser);
infoUserRouter.post("/create/", infoUserController.getInfoDetailUser);
infoUserRouter.put("/create/", infoUserController.putInfoDetailUser);

export default infoUserRouter;
