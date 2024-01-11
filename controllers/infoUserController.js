import { ObjectId } from "mongodb";
import EduModel from "../Models/Detail/Edu.js";
import DetailUserModel from "../Models/DetailUser.js";
import OptionModel from "../Models/Option.js";
import ExpModel from "../Models/Detail/Exp.js";
import SkillsModel from "../Models/Detail/Skills.js";
import ProjectModel from "../Models/Detail/Project.js";
import CoursesModel from "../Models/Detail/Courses.js";

const infoUserController = {
  //Update dữ liệu
  putInfoUser: async (req, res) => {
    try {
      const update = { $set: req.body };
      const NewUpdateInfo = await DetailUserModel.findOneAndUpdate(
        req.id,
        update,
        { new: true }
      );
      if (NewUpdateInfo)
        res.status(201).json({
          message: "Update Succes !",
          data: NewUpdateInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewUpdateInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getInfoUser: async (req, res) => {
    try {
      const NewGetInfo = await DetailUserModel.findOne(req.id);
      if (NewGetInfo)
        res.status(200).json({
          message: "Get Succes !",
          data: NewGetInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewGetInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getOptionUser: async (req, res) => {
    try {
      req.id = { idUser: req.body.id };
      const NewGetOption = await OptionModel.findOne(req.id);
      if (NewGetOption)
        res.status(200).json({
          message: "Get Succes !",
          data: NewGetOption,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewGetOption,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  putOptionUser: async (req, res) => {
    try {
      const update = { $set: req.body };
      req.id = { idUser: req.body.id };
      const NewUpdateOption = await OptionModel.findOneAndUpdate(
        req.id,
        update,
        { new: true }
      );
      if (NewUpdateOption)
        res.status(201).json({
          message: "Update Succes !",
          data: NewUpdateOption,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewUpdateOption,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  getInfoDetailUser: async (req, res) => {
    try {
      req.id = { idUser: req.body.id };
      const { name } = req.query;
      let NewGetInfo;
      switch (name) {
        case "Education":
          NewGetInfo = await EduModel.findOne(req.id);
          break;
        case "Exp":
          NewGetInfo = await ExpModel.findOne(req.id);
          break;
        case "Skills":
          NewGetInfo = await SkillsModel.findOne(req.id);
          break;
        case "Project":
          NewGetInfo = await ProjectModel.findOne(req.id);
          break;
        case "Courses":
          NewGetInfo = await CoursesModel.findOne(req.id);
          break;
        default:
          res.status(500).json({
            message: "Router is fail",
          });
          return;
      }
      if (NewGetInfo)
        res.status(200).json({
          message: "Get Succes !",
          data: NewGetInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewGetInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
  putInfoDetailUser: async (req, res) => {
    try {
      const update = { $set: req.body };
      req.id = { idUser: req.body.id };
      const { name } = req.query;
      let NewUpdateInfo;
      switch (name) {
        case "Education":
          NewUpdateInfo = await EduModel.findOneAndUpdate(req.id, update, {
            new: true,
          });
          break;
        case "Exp":
          NewUpdateInfo = await ExpModel.findOneAndUpdate(req.id, update, {
            new: true,
          });
          break;
        case "Skills":
          NewUpdateInfo = await SkillsModel.findOneAndUpdate(req.id, update, {
            new: true,
          });
          break;
        case "Project":
          NewUpdateInfo = await ProjectModel.findOneAndUpdate(req.id, update, {
            new: true,
          });
          break;
        case "Courses":
          NewUpdateInfo = await CoursesModel.findOneAndUpdate(req.id, update, {
            new: true,
          });
          break;
        default:
          res.status(500).json({
            message: "Router is fail",
          });
          return;
      }

      if (NewUpdateInfo)
        res.status(201).json({
          message: "Update Succes !",
          data: NewUpdateInfo,
        });
      else
        res.status(404).json({
          message: "Not found !",
          data: NewUpdateInfo,
        });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },
};
export default infoUserController;
