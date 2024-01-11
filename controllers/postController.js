import PostModel from "../Models/post.js";

const PostController = {
  createPost: async (req, res) => {
    try {
      const newPost = req.body;
      const createNewPost = await PostModel.create(newPost);
      res.status(201).json({
        message: "Post created successfully",
        data: createNewPost,
        isSuccess: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },

  getPost: async (req, res) => {
    try {
      const allPost = req.body;
      const getAllPost = await PostModel.find(allPost);
      res.status(201).json({
        message: "Get successfully",
        data: getAllPost,
        isSuccess: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },

  getPostById: async (req, res) => {
    try {
      const { id } = req.params;
      const post = req.body;
      const getPostById = await PostModel.findOne(
        {
          _id: id,
        },
        post
      );
      res.status(200).json({
        message: "Get post by id successfully",
        data: getPostById,
        isSuccess: true,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },

  putPostById: async (req, res) => {
    try {
      const update = { $set: req.body };
      const putPostById = await PostModel.findOneAndUpdate(req._id, update, {
        new: true,
      });
      if (putPostById)
        res.status(201).json({
          message: "Update Succes !",
          data: putPostById,
          isSuccess: true,
        });
      else
        res.status(404).json({
          message: "Not found !",
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
        isSuccess: false,
      });
    }
  },
};

export default PostController;
