import mongoose from "mongoose";

// Contact Infomation
const EmployerSchema = mongoose.Schema({
  fullName: String,
  workTitle: String,
  workEmail: String,
  phoneNumber: Number,
  companyName: String,
  companyLocation: String,
  websiteUrl: String,
  selectedOption: String,
  companyType: String,
  companySize: String,
  country: String,
  workingDay: String,
  overtimePolicy: String,
});

const EmployerModel = mongoose.model("employer", EmployerSchema);

export default EmployerModel;
