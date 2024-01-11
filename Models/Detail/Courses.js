import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const CoursesSchema = mongoose.Schema({
  idUser: ObjectId,
  title: String,
  info: String,
  description: String,
  time: String,
  skills: String,
});
CoursesSchema.pre("save", function (next) {
  const model = this;
  model.schema.eachPath((path) => {
    if (!model[path]) {
      model[path] = "";
    }
  });
  next();
});

const CoursesModel = mongoose.model("detail/Courses", CoursesSchema);

export default CoursesModel;
