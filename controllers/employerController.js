import EmployerModel from "../Models/employerDetail.js";

const employerController = {
  // CREATE
  postDetail: async (req, res) => {
    try {
      const newEmployerDetail = req.body;

      const existingEmployer = await EmployerModel.findOne({
        workEmail: newEmployerDetail.workEmail,
        companyName: newEmployerDetail.companyName,
      });
      if (existingEmployer) {
        res.status(400).json({
          message: "This company name or email have existed",
        });
        return;
      }
      const createNewEmployerDetail = await EmployerModel.create(
        newEmployerDetail
      );
      res.status(201).json({
        message: "Employer Detail created successfully",
        data: createNewEmployerDetail,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  },

  // GetOneBYId
  getDetailsById: async (req, res) => {
    try {
      const { id } = req.params;
      const emplDetails = req.body;
      const getEmpById = await EmployerModel.findOne(
        {
          _id: id,
        },
        emplDetails
      );
      res.status(201).json({
        message: "Get successfully",
        data: getEmpById,
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
};

export default employerController;
