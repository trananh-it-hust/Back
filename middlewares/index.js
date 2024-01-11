import { ObjectId } from "mongodb";
import UserModel from "../Models/user.js";
import { verifyToken } from "../utils/index.js";

const middlewares = {
  register: async (req, res, next) => {
    const { userName, email, password } = req.body;
    // Must have userName
    if (!userName) {
      res.status(400).json({
        message: "Please provide a username",
      });
      return;
    }
    // Must have email
    if (!email) {
      res.status(400).json({
        message: "Please provide a email",
      });
      return;
    }

    try {
      // check if email already in Database
      const existingEmail = await UserModel.findOne({ email });
      if (existingEmail) {
        res.status(400).json({
          message: "Email already in use",
        });
        return;
      }
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
      return;
    }

    //  Must have password
    if (!password) {
      res.status(400).json({
        message: "Please provide a password",
      });
      return;
    }
    next();
  },

  login: (req, res, next) => {
    const { email, password } = req.body;
    // Must have userName
    if (!email) {
      res.status(400).json({
        message: "Please provide a username",
      });
      return;
    }
    // Must have password
    if (!password) {
      res.status(400).json({
        message: "Please provide a password",
      });
      return;
    }
    next();
  },

  // EMPLOYER MIDDLEWARES
  employer: async (req, res, next) => {
    const {
      fullName,
      workTitle,
      workEmail,
      phoneNumber,
      companyName,
      companyLocation,
      websiteUrl,
      companyType,
      companySize,
      country,
      workingDay,
      overtimePolicy,
    } = req.body;
    // fullName
    if (!fullName) {
      res.status(400).json({
        message: "Please let us know your name",
      });
      return;
    } else if (fullName.length < 3) {
      res.status(400).json({
        message: "Please enter fullName at least 4 characters",
      });
      return;
    }

    // workTitle
    if (!workTitle) {
      res.status(400).json({
        message: "Please let us know your title",
      });
      return;
    } else if (workTitle.length < 3) {
      res.status(400).json({
        message: "Please enter work title at least 4 characters",
      });
      return;
    }

    // workEmail
    const emailRegex = /\b[A-Za-z0-9._%+-]+@gmail\.com\b/;
    if (!workEmail) {
      res.status(400).json({
        message: "Please provide your work email address",
      });
      return;
    }
    if (!emailRegex.test(workEmail)) {
      res.status(400).json({
        message: "Please provide a valid Gmail email address",
      });
      return;
    }

    // phoneNumber
    if (!phoneNumber) {
      res.status(400).json({
        message: "Please let us know your name",
      });
      return;
    }

    // companyName
    if (!companyName) {
      res.status(400).json({
        message: "Please let us know your company name",
      });
      return;
    }
    // companyLocation
    if (!companyLocation) {
      res.status(400).json({
        message: "Please let us know your company name",
      });
      return;
    }

    // websiteUrl
    if (!websiteUrl) {
      res.status(400).json({
        message: "Please let us know your website company",
      });
      return;
    }

    next();
  },

  infoUser: async (req, res, next) => {
    try {
      const { id } = req.body;
      const newid = new ObjectId(id);
      const user = await UserModel.findOne({ _id: newid });
      req.id = { idUser: user._id };
    } catch (error) {
      res.status(401).json({ message: error.message });
      return;
    }

    //
    next();
  },
  createPost: async (req, res, next) => {
    const {
      title,
      userName,
      rangeSalary,
      location,
      workPlace,
      vacancies,
      createdAt,
    } = await req.body;

    if (!title) {
      res.status(400).json({
        message: "You need provide the title",
      });
      return;
    }
    if (!userName) {
      res.status(400).json({
        message: "You need provide the name",
      });
      return;
    }
    if (!rangeSalary) {
      res.status(400).json({
        message: "You need provide the Range Salary",
      });
      return;
    }
    if (!workPlace) {
      res.status(400).json({
        message: "You need provide the Work Place",
      });
      return;
    }
    if (!location) {
      res.status(400).json({
        message: "You need provide the location",
      });
      return;
    }
    if (!vacancies) {
      res.status(400).json({
        message: "You need provide the Vacancies",
      });
      return;
    }
    next();
  },
  checkToken: (req, res, next) => {
    try {
      const authHeader = req.headers["authorization"];
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
          error:
            "JWT must be provided in the Authorization header as Bearer Token.",
        });
      }
      const token = authHeader.split(" ")[1];
      const checkToken = verifyToken(token);
      req.user = checkToken;
      next();
    } catch (error) {
      res.status(401).json({ message: error.message });
      return;
    }
  },
};
export default middlewares;
