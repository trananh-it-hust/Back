import mongoose from "mongoose";
import { format } from "date-fns";

const PostSchema = mongoose.Schema({
  title: String,
  userName: String, // CompanyName or UserName
  rangeSalary: String,
  location: String,
  workPlace: String, // Hybrid or at office
  vacancies: String,
  createdAt: {
    type: String,
    default: format(new Date(), "MMM dd, yyyy"),
  },
  jobDescription: String,
  Exp: String,
  whyLoveWorkHere: String,
});

const PostModel = mongoose.model("posts", PostSchema);

export default PostModel;
