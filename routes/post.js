import express from "express";

// middlewares
import middlewares from "../middlewares/index.js";

// controllers
import PostController from "../controllers/postController.js";

const postRouter = express.Router();

//  Routes
postRouter.post("/", middlewares.createPost, PostController.createPost);

postRouter.get("/", PostController.getPost);

postRouter.get("/:id", PostController.getPostById);

postRouter.put("/:id", PostController.putPostById);

export default postRouter;
