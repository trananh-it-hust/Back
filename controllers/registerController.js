import CoursesModel from "../Models/Detail/Courses.js";
import EduModel from "../Models/Detail/Edu.js";
import ExpModel from "../Models/Detail/Exp.js";
import ProjectModel from "../Models/Detail/Project.js";
import SkillsModel from "../Models/Detail/Skills.js";
import DetailUserModel from "../Models/DetailUser.js";
import OptionModel from "../Models/Option.js";
import UserModel from "../Models/user.js";

const registerController = {
  createNewUser: async (req, res) => {
    try {
      // check email existed
      // crypto password
      const newUser = req.body;
      const createNewUser = await UserModel.create(newUser);
      // tạo 1 detailUser với IdUser tương ứng objectId
      const createNewDetailUser = await DetailUserModel.create({
        idUser: createNewUser._id,
        ...req.body,
      });
      const createNewOption = await OptionModel.create({
        idUser: createNewUser._id,
      });
      const createEdu = await EduModel.create({
        idUser: createNewUser._id,
      });
      const createExp = await ExpModel.create({
        idUser: createNewUser._id,
      });
      const createProject = await ProjectModel.create({
        idUser: createNewUser._id,
      });
      const createSkills = await SkillsModel.create({
        idUser: createNewUser._id,
      });
      const createCourses = await CoursesModel.create({
        idUser: createNewUser._id,
      });
      //

      res.status(201).json({
        message: "User created successfully",
        data: createNewUser,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getAllRegister: async (req, res) => {
    try {
      const getNewUser = req.body;
      const getAllNewUsers = await UserModel.find(getNewUser);
      res.status(200).json({
        message: "Users retrieved successfully",
        data: getAllNewUsers,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};

export default registerController;
